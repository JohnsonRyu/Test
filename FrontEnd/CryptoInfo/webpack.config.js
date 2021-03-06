const HtmlWebpackPlugin = require("html-webpack-plugin"); // 아까 설치한 플러그인이죠? html 문서에 자동으로 번들파일을 추가해줍니다.
const path = require("path");

module.exports = {
  // 의존성 그래프의 시작점
  entry: { 
    index: "./src/index.tsx"
  },
  // 번들된 결과물의 위치
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  // webpack의 출력을 디버깅 할 소스 맵을 사용하도록 설정합니다.
  devtool: "source-map",
  // 확인 가능한 확장자
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  externals: "/node_modules",
  // test : 로딩할 파일 & use : 적용할 로더
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      }, {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  // 번들링이 끝난 번들된 결과물을 처리
  // "./public/index.html" 경로의 html 파일에 번들 파일을 넣어줍니다.
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
      filename: "./index.html",
    })
  ],
  // devserver 설정을 추가해준다.
  devServer : {
    contentBase: path.join(__dirname, "dist"),
    port : 3000,
    hot : true,
    inline : true,
    compress: true,
    historyApiFallback: true
  }
};
