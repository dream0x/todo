#!/bin/bash

set -eou pipefail

MODE="${1:-}"

case "$MODE" in
  rf)
    rm -rf src/front
    mkdir -p src/front
    ;;
  rb)
    rm -rf src/back
    mkdir -p src/back
    ;;
esac

## front

if [ ! -f "src/front/package.json" ]; then 
  docker compose run --rm front bash -c '
    set -euo pipefail

    npx --yes create-expo-app -e with-router .

    npx expo install typescript @expo/ngrok expo-updates expo-splash-screen @biomejs/biome axios zustand tamagui @tamagui/config react-hook-form zod @hookform/resolvers lucide-react-native expo-crypto\
      @tamagui/helpers-icon react-native-svg lucide-react-native\
      @tamagui/animations-reanimated react-native-reanimated
    
    npm dedupe
  '

  cp -r init/front/* src/front/
  rm -rf src/front/.git
else
  echo "already front project"
fi

## back

if [ ! -f "src/back/build.gradle" ]; then 
  docker compose run --rm back bash -c '
    set -euo pipefail

    curl -G https://start.spring.io/starter.tgz \
    -d name=spring \
    -d groupId=com \
    -d artifactId=app \
    -d configurationFileFormat=yaml \
    -d type=gradle-project \
    -d javaVersion=21 \
    -d bootVersion=4.0 \
    -d dependencies=devtools,lombok,springdoc-openapi,web,validation,mybatis,postgresql,data-rest-explorer \
    | tar -xzvf -
  '
else
  echo "already back project"
fi
