import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

export default {
    input: "src/main.js",
    output: {
        file: "bundle.js",
        format: "esm",
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/preset-react"],
            extensions: [".js", ".jsx"],
        }),
        commonjs(),
        nodeResolve({ extensions: [".js", ".jsx"] }),
    ],
};
