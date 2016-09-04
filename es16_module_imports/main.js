import {foo as a, bar as b} from './libs/named_exports';

console.log(a);
b();

import { default as c } from './libs/default_export'
c();


// All syntaxes:
// 
// import localName from 'src/my_lib';
// import * as my_lib from 'src/my_lib';
// import { name1, name2 } from 'src/my_lib';
// import { name1 as localName1, name2 } from 'src/my_lib';
// import { default as foo } from 'src/my_lib';
// import theDefault, * as my_lib from 'src/my_lib';
// import theDefault, { name1, name2 } from 'src/my_lib';
