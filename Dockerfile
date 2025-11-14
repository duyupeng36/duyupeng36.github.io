# 多阶段构建：构建阶段
FROM node:25-alpine AS builder

# 设置工作目录
WORKDIR /duyupeng36.github.io

# 复制源代码
ADD . /duyupeng36.github.io/

RUN apk add git

# 安装依赖 && 构建项目
RUN npm install \
&& npm run docs:build

# 多阶段构建：生产阶段
FROM nginx:alpine

# 安装 bash 用于执行脚本（alpine 镜像默认没有 bash）
RUN apk add bash

# 设置工作目录
WORKDIR /duyupeng36.github.io

# 从构建阶段复制构建结果
COPY --from=builder /duyupeng36.github.io/docs/.vuepress/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY --from=builder /duyupeng36.github.io/nginx.conf /etc/nginx/conf.d/default.conf
# 复制证书
COPY --from=builder /duyupeng36.github.io/cert /usr/share/nginx/conf.d

# 暴露端口
EXPOSE 8080

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
