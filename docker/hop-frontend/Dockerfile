FROM --platform=$BUILDPLATFORM node:14-alpine as builder
RUN apk add git alpine-sdk python3 jq

COPY . /hop
WORKDIR /hop
RUN npm set unsafe-perm true
RUN yarn install && yarn lerna bootstrap

WORKDIR /hop/packages/frontend
RUN REACT_APP_NETWORK=devnet yarn build

FROM scratch
COPY --from=builder /hop/packages/frontend/build /www
