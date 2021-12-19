import React, { useEffect, useRef } from "react";

import { CompanyCard } from "components/companyCard";

export const Chat = () => {
  const wrapper = useRef();

  useEffect(() => {
    const bot = new window.ChatSDK({
      root: wrapper.current,
      config: {
        // avatarWhiteList: ['knowledge', 'recommend'],
        navbar: {
          title: "某某公司-李三",
        },
        // 头像白名单
        avatarWhiteList: ["knowledge", "recommend"],
        // 机器人头像
        robot: {
          avatar: "//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg",
        },
        // 用户头像
        user: {
          avatar: "//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg",
        },
        toolbar: [
          {
            type: "image",
            icon: "image",
            title: "相册",
          },
        ],
        // 首屏消息
        messages: [
          {
            type: "card",
            content: {
              code: "company-card",
              data: {},
            },
          },
        ],
      },
      requests: {
        send: function (msg) {
          const data = msg.content;

          // 发送文本消息时
          console.log(data, "data");
          // ... 其它消息类型的处理
          if (msg.type === "text") {
            return {};
          }
        },
      },
      makeRecorder({ ctx }) {
        return {
          // 是否支持语音输入，
          canRecord: true,
          onStart() {
            console.log("开始录音");
          },
          onEnd() {
            console.log("停止录音");
            // 识别到文本后要 ctx.postMessage
          },
          onCancel() {
            console.log("取消录音");
          },
        };
      },
      handlers: {
        onToolbarClick(item, ctx) {
          // 如果点的是“相册”
          if (item.type === "image") {
            ctx.util.chooseImage({
              // multiple: true, // 是否可多选
              success(e) {
                if (e.files) {
                  // 如果有 h5 上传的图
                  const file = e.files[0];
                  // 先展示图片
                  ctx.appendMessage({
                    type: "image",
                    content: {
                      picUrl: URL.createObjectURL(file),
                    },
                    position: "right",
                  });

                  // 发起请求，具体自行实现，这里以 OCR 识别后返回文本为例
                  // requestOcr({ file }).then(res => {
                  //   ctx.postMessage({
                  //     type: 'text',
                  //     content: {
                  //       text: res.text
                  //     },
                  //     quiet: true // 不展示
                  //   });
                  // });
                }
              },
            });
          }
        },
      },
      components: {
        "company-card": CompanyCard,
      },
    });

    bot.run();
  }, []);

  // 注意 wrapper 的高度
  return <div style={{ height: "100%" }} ref={wrapper} />;
};
