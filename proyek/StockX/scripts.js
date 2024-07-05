document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const editModal = document.getElementById('edit-modal');
    const deleteModal = document.getElementById('delete-modal');
    const editForm = document.getElementById('edit-form');
    const confirmDelete = document.getElementById('confirm-delete');
    
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let currentEditIndex = null;
    
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('product-name').value;
        const category = document.getElementById('product-category').value;
        const quantity = document.getElementById('product-quantity').value;
        
        const product = { name, category, quantity };
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
        productForm.reset();
    });

    editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('edit-name').value;
        const category = document.getElementById('edit-category').value;
        const quantity = document.getElementById('edit-quantity').value;
        
        products[currentEditIndex] = { name, category, quantity };
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
        closeModal('edit-modal');
    });

    confirmDelete.addEventListener('click', () => {
        products.splice(currentEditIndex, 1);
        localStorage.setItem('products', JSON.stringify(products));
        renderProducts();
        closeModal('delete-modal');
    });

    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-button')) {
            currentEditIndex = e.target.dataset.index;
            const product = products[currentEditIndex];
            document.getElementById('edit-name').value = product.name;
            document.getElementById('edit-category').value = product.category;
            document.getElementById('edit-quantity').value = product.quantity;
            openModal('edit-modal');
        } else if (e.target.classList.contains('delete-button')) {
            currentEditIndex = e.target.dataset.index;
            openModal('delete-modal');
        }
    });

    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${product.name} - ${product.category} - ${product.quantity}</span>
                <span>
                    <button class="edit-button" data-index="${index}">Edit</button>
                    <button class="delete-button" data-index="${index}">Delete</button>
                </span>
            `;
            productList.appendChild(li);
        });
    }

    function openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    function closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    renderProducts();
});
