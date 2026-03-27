# 🚀 React Native Linear Gradient Without Third-Party Dependency (RN ≥ 0.76)

This repository demonstrates how to create **linear gradients in React Native (version 0.76 and above)** using the new built-in style property:


experimental_backgroundImage


This approach removes the need for third-party libraries like:


react-native-linear-gradient


and helps keep your application lighter and easier to maintain.

---

# ✨ Why Use This Approach?

Using `experimental_backgroundImage`:

- ✅ removes external dependencies
- ✅ reduces app bundle size
- ✅ simplifies styling
- ✅ works directly inside `View` styles
- ✅ supports gradient direction (angles)
- ✅ works for gradient buttons and containers

---

# 📦 Requirements

Make sure your project is using:


React Native >= 0.76


This feature is **not available in earlier versions**.

---

# 📱 Example Usage

Basic gradient example:

```js
const GRADIENT = ['#222795', '#0E7E3D'];

<View
  style={{
    experimental_backgroundImage: `linear-gradient(${GRADIENT.join(', ')})`,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <Text style={{ color: 'white' }}>
    Gradient without dependency
  </Text>
</View>
```
🎯 Gradient With Angle Support

Example:

experimental_backgroundImage:
  `linear-gradient(135deg, ${GRADIENT.join(', ')})`

This produces directional gradients similar to:

react-native-linear-gradient
🔘 Gradient Button Example
```js
<TouchableOpacity
  style={{
    experimental_backgroundImage:
      `linear-gradient(135deg, ${GRADIENT.join(', ')})`,
    padding: 12,
    borderRadius: 8,
  }}
>
  <Text style={{ color: 'white' }}>
    Gradient Button
  </Text>
</TouchableOpacity>
```
⚠️ Important Notes
Works only with React Native ≥ 0.76
Currently an experimental styling API
Behavior may change in future React Native releases
Always test on both Android and iOS
📖 Medium Article Reference

Full article available here:

👉 https://medium.com/@ermohit2k18/no-more-third-party-linear-gradient-in-react-native-react-native-0-76-5e36f0efe1fb

🔥 More React Native + Firebase Guides Coming

I regularly share production-ready tutorials covering:

Firebase Push Notifications
Firebase Analytics
Firebase Remote Config
Modern React Native built-in alternatives to third-party libraries
Performance improvements for real-world apps

Stay connected for more updates 🚀
