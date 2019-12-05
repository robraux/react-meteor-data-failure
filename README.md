This project is a Meteor skeleton with [React StrictMode](https://reactjs.org/docs/strict-mode.html) enabled.

# To execute and observe issue:
1. `meteor npm install`
2. `meteor run`
3. Observe below `Learn Meteor!` (no links display).
4. Remove the `React.StrictMode` from imports/ui/App.jsx`
```javascript
diff --git a/imports/ui/App.jsx b/imports/ui/App.jsx
index a366e85..3a3a473 100644
--- a/imports/ui/App.jsx
+++ b/imports/ui/App.jsx
@@ -5,10 +5,8 @@ import Info from './Info.jsx';
 const App = () => (
   <div>
     <h1>Welcome to Meteor!</h1>
-    <React.StrictMode>
       <Hello />
       <Info />
-    </React.StrictMode>
   </div>
 );
```
5. Observe below `Learn Meteor!` (links now display).

# Steps used to produce this project

1. meteor create --react rmd-failure
2. edited `imports/ui/App.jsx` to wrap `Hello` and `Info` in `React.StrictMode`.
3. Learn Meteor links are _not_ returned when Strict mode is enabled. 

----
