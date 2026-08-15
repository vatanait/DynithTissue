
<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynith Tissue - ក្រដាសជូតមាត់គុណភាពខ្ពស់</title>
    <!-- Google Fonts for Khmer -->
    <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* ================= CSS STYLES ================= */
        :root {
            --primary-color: #008080; /* Teal/Cyan-green tone */
            --primary-dark: #005656;
            --accent-color: #ff7f50;
            --bg-light: #f8f9fa;
            --text-color: #333;
            --white: #ffffff;
            --shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Kantumruy Pro', sans-serif;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-color);
            line-height: 1.6;
        }

        /* Header / Navigation */
        header {
            background-color: var(--white);
            box-shadow: var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            max-width: 1200px;
            margin: 0 auto;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--primary-color);
            text-decoration: none;
        }

        .logo span {
            color: var(--accent-color);
        }

        .cart-icon {
            position: relative;
            cursor: pointer;
            font-size: 1.2rem;
            background: var(--primary-color);
            color: var(--white);
            padding: 8px 16px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .cart-count {
            background: var(--accent-color);
            color: white;
            border-radius: 50%;
            padding: 2px 8px;
            font-size: 0.8rem;
            font-weight: bold;
        }

        /* Hero Banner */
        .hero {
            background: linear-gradient(135deg, rgba(0,128,128,0.1), rgba(255,127,80,0.1));
            padding: 4rem 5%;
            text-align: center;
            border-bottom-left-radius: 30px;
            border-bottom-right-radius: 30px;
        }

        .hero h1 {
            font-size: 2.5rem;
            color: var(--primary-dark);
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.1rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto 2rem;
        }

        .btn {
            background-color: var(--primary-color);
            color: var(--white);
            padding: 10px 25px;
            border: none;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
            display: inline-block;
        }

        .btn:hover {
            background-color: var(--primary-dark);
        }

        /* Product Section */
        .container {
            max-width: 1200px;
            margin: 3rem auto;
            padding: 0 5%;
        }

        .section-title {
            text-align: center;
            font-size: 2rem;
            color: var(--primary-dark);
            margin-bottom: 2rem;
            position: relative;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .product-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-img {
            width: 100%;
            height: 200px;
            background-color: #e9ecef;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }

        .product-info {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .product-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-desc {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1rem;
        }

        .product-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .add-to-cart-btn {
            width: 100%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }

        .add-to-cart-btn:hover {
            background-color: var(--primary-dark);
        }

        /* Cart Modal Drawer */
        .cart-modal {
            position: fixed;
            top: 0;
            right: -100%;
            width: 350px;
            height: 100%;
            background: var(--white);
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            transition: 0.3s ease;
            z-index: 101;
            padding: 2rem;
            display: flex;
            flex-direction: column;
        }

        .cart-modal.active {
            right: 0;
        }

        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #eee;
            padding-bottom: 1rem;
            margin-bottom: 1rem;
        }

        .close-cart {
            cursor: pointer;
            font-size: 1.5rem;
            background: none;
            border: none;
        }

        .cart-items {
            flex-grow: 1;
            overflow-y: auto;
        }

        .cart-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #f0f0f0;
        }

        .cart-footer {
            border-top: 1px solid #eee;
            padding-top: 1rem;
        }

        .total-price {
            font-size: 1.2rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        /* Overlay */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.4);
            display: none;
            z-index: 100;
        }

        .overlay.active {
            display: block;
        }

        /* Footer */
        footer {
            background-color: var(--primary-dark);
            color: var(--white);
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }

        /* Responsive */
        @media (max-width: 500px) {
            .cart-modal {
                width: 100%;
            }
        }
    </style>
</head>
<body>

    <!-- Overlay -->
    <div class="overlay" id="overlay" onclick="toggleCart()"></div>

    <!-- Header Navigation -->
    <header>
        <div class="navbar">
            <a href="#" class="logo">Dynith<span>Tissue</span></a>
            <div class="cart-icon" onclick="toggleCart()">
                🛒 កន្ត្រកទំនិញ
                <span class="cart-count" id="cartCount">0</span>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>ក្រដាសជូតមាត់ Dynith គុណភាពខ្ពស់</h1>
        <p>ទន់ ស្អាត អនាម័យខ្ពស់ និងមិនងាយដាច់! ស័ក្តិសមបំផុតសម្រាប់ប្រើប្រាស់ក្នុងគ្រួសារ ភោជនីយដ្ឋាន និងការិយាល័យ។</p>
        <a href="#products" class="btn">មើលទំនិញទាំងអស់</a>
    </section>

    <!-- Product Catalog Section -->
    <section class="container" id="products">
        <h2 class="section-title">ផលិតផល Dynith</h2>
        <div class="products-grid" id="productGrid">
            <!-- Products will be injected via JS -->
        </div>
    </section>

    <!-- Cart Drawer Modal -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-header">
            <h3>កន្ត្រកទំនិញរបស់អ្នក</h3>
            <button class="close-cart" onclick="toggleCart()">&times;</button>
        </div>
        <div class="cart-items" id="cartItems">
            <p style="text-align: center; color: #888; margin-top: 2rem;">មិនទាន់មានទំនិញនៅក្នុងកន្ត្រកទេ</p>
        </div>
        <div class="cart-footer">
            <div class="total-price">
                <span>តម្លៃសរុប:</span>
                <span id="totalAmount">$0.00</span>
            </div>
            <button class="btn" style="width: 100%;" onclick="checkout()">បញ្ជាទិញឥឡូវនេះ</button>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2026 Dynith Tissue. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        <p style="font-size: 0.8rem; margin-top: 5px;">ទំនាក់ទំនង: 012 345 678 | Telegram: @dynith_tissue</p>
    </footer>

    <!-- ================= JAVASCRIPT ================= -->
    <script>
        // Data: Products List
        const products = [
            {
                id: 1,
                name: "Dynith Soft Box (កញ្ចប់ប្រអប់)",
                desc: "ក្រដាសប្រអប់ទន់ 3 ជាន់ មាន 150 សន្លឹក ទន់ភ្លន់ចំពោះស្បែកមុខ",
                price: 1.50,
                icon: "🧻"
            },
            {
                id: 2,
                name: "Dynith Roll Pack (ដុំមូល 12ដុំ)",
                desc: "ក្រដាសអនាម័យដុំមូលកញ្ចប់ធំ (១កញ្ចប់មាន ១២ដុំ) ស្ស្អិតល្អ",
                price: 3.80,
                icon: "🧻"
            },
            {
                id: 3,
                name: "Dynith Pocket Mini (កញ្ចប់តូច)",
                desc: "ក្រដាសជូតមាត់ហោប៉ៅ ងាយស្រួលយួរតាមខ្លួន (១កញ្ចប់មាន ១០កញ្ចប់តូច)",
                price: 1.00,
                icon: "🧻"
            },
            {
                id: 4,
                name: "Dynith Kitchen Towel (សម្រាប់ចុងភៅ)",
                desc: "ក្រដាសជូតផ្ទះបាយ ជញ្ជក់ប្រេង និងទឹកបានល្អ מעולה",
                price: 2.20,
                icon: "🧻"
            }
        ];

        let cart = [];

        // Render Products to Webpage
        function displayProducts() {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = products.map(product => `
                <div class="product-card">
                    <div class="product-img">${product.icon}</div>
                    <div class="product-info">
                        <div>
                            <div class="product-title">${product.name}</div>
                            <div class="product-desc">${product.desc}</div>
                        </div>
                        <div>
                            <div class="product-price">$${product.price.toFixed(2)}</div>
                            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                                បន្ថែមទៅកន្ត្រក
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Toggle Cart Modal View
        function toggleCart() {
            document.getElementById('cartModal').classList.toggle('active');
            document.getElementById('overlay').classList.toggle('active');
        }

        // Add Product to Cart Logic
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCartUI();
        }

        // Remove Item from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
        }

        // Update Cart Interface & Total
        function updateCartUI() {
            // Count total items
            const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').innerText = totalCount;

            // Render Cart List
            const cartItemsContainer = document.getElementById('cartItems');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `<p style="text-align: center; color: #888; margin-top: 2rem;">មិនទាន់មានទំនិញនៅក្នុងកន្ត្រកទេ</p>`;
            } else {
                cartItemsContainer.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div>
                            <strong style="font-size: 0.95rem;">${item.name}</strong><br>
                            <span style="color: #666; font-size: 0.85rem;">$${item.price.toFixed(2)} x ${item.quantity}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
                            <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: red; cursor: pointer;">🗑️</button>
                        </div>
                    </div>
                `).join('');
            }

            // Calculate Total Amount
            const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('totalAmount').innerText = `$${totalAmount.toFixed(2)}`;
        }

        // Checkout Button Action
        function checkout() {
            if (cart.length === 0) {
                alert('សូមបន្ថែមទំនិញទៅក្នុងកន្ត្រកជាមុនសិន!');
                return;
            }
            alert('អរគុណសម្រាប់ការបញ្ជាទិញក្រដាសជូតមាត់ Dynith! យើងនឹងទាក់ទងទៅអ្នកឆាប់ៗនេះ។');
            cart = [];
            updateCartUI();
            toggleCart();
        }

        // Initialize Page
        displayProducts();
    </script>
</body>
</html>
