//unknown → মানে হলো যেকোনো কিছু হতে পারে, কিন্তু সরাসরি ব্যবহার করা যাবে না। আগে টাইপ চেক বা কাস্ট করতে হবে।
// 👉 এটা any এর মতো ফ্রি না, বরং নিরাপদ।/

let data: unknown = "Hello";

// console.log(data.toUpperCase()); // ❌ Error

console.log((data as string).toUpperCase()); // ✅ Safe