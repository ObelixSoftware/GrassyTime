pid=$(lsof -ti tcp:8081)
if [[ $pid ]]; then
  kill -9 $pid
fi
