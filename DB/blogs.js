
export const blogs = [
    {
        id: 1,
        title: "Mastering React Hooks in 2024",
        category: "Tech",
        author: "Sarah Coder",
        date: "Nov 10, 2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive guide to using useEffect, useState, and custom hooks effectively.",
        content: `
      <h2>Introduction</h2>
      <p>React Hooks have revolutionized how we write components. In this guide, we'll explore the best practices for 2024.</p>
      
      <h3>The Power of useEffect</h3>
      <p>Managing side effects has never been easier. However, dependency arrays can be tricky.</p>
      
      <pre><code>useEffect(() => {
  console.log('Component mounted');
}, []);</code></pre>

      <h3>Custom Hooks</h3>
      <p>Extracting logic into custom hooks keeps your components clean and reusable.</p>
    `
    },
    {
        id: 2,
        title: "Healthy Meal Prep for Busy Professionals",
        category: "Lifestyle",
        author: "Chef Mike",
        date: "Nov 15, 2024",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
        description: "Save time and eat better with these simple meal prep strategies.",
        content: "<p>Meal prep doesn't have to be boring. Here are 5 recipes you can make in under an hour.</p>"
    }
    
];

export const categories = ["All", "Travel", "Tech", "Lifestyle", "Food", "Coding Tips", "Entertainment "];
