* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f4f4;
}

.hidden { display: none; }

/* Login Styling */
.auth-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ff9966, #ff5e62);
}

.login-box {
    background: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.login-box span { color: #ff5e62; font-weight: bold; }

input {
    display: block;
    width: 100%;
    padding: 12px;
    margin: 15px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    background: #ff5e62;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover { background: #e04e52; }

/* Main Content Styling */
header {
    background: #333;
    color: white;
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav ul { display: flex; list-style: none; }
nav ul li { margin-left: 20px; }
nav ul li a { color: white; text-decoration: none; }

.hero {
    background: url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200') center/cover;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 10px rgba(0,0,0,0.7);
}

.section-title { text-align: center; margin: 40px 0; }

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 50px;
}

.card {
    background: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
}

#about {
    padding: 80px 50px;
    background: #fff;
    margin-top: 50px;
    text-align: center;
}

footer {
    text-align: center;
    padding: 20px;
    background: #333;
    color: white;
}
