type Messages = typeof import("./messages/en.json")
type ZhMessages = typeof import("./messages/zh.json")

declare interface IntlMessages extends Messages, ZhMessages {}