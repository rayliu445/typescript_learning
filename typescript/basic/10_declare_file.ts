//原来的jQuery,直接在html中通过<script>标签引入就能用
// $('#foo');
// // or
// jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
declare var jQuery: (selector: string) => any;

jQuery('#foo');
//通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件3：

// src/jQuery.d.ts

declare var jQuery: (selector: string) => any;
// src/index.ts

jQuery('#foo');