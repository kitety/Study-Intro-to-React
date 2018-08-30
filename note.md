相关的记录点
===
1.重新渲染触发
---
```javascript
onClick={() => alert('click')}
//正常触发
onClick={ alert('click')}
//每次重新渲染都会触发
```
