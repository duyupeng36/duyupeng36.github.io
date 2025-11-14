#!/bin/bash
set -e

# 如果当前命令不是nginx，那么执行用户指定的命令
if [ "$1" != "nginx" ]; then
    exec "$@"
fi

# 否则，启动nginx
exec nginx -g "daemon off;"
