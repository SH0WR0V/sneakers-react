function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const skid = JSON.parse(sessionStorage.getItem("skid"));
    return { token, skid };
}

export async function getUser() {
    const browserData = getSession();
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }
    const response = await fetch(`http://localhost:8000/600/users/${browserData.skid}`, requestOptions);
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const browserData = getSession();
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${browserData.skid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    });
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const browserData = getSession();
    const order = {
        products: cartList,
        amount_paid: total,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    }
    const response = await fetch("http://localhost:8000/660/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` },
        body: JSON.stringify(order)
    });
    const data = await response.json();
    return data;
}

