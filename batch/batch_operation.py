import sqlite3

inventory_conn = sqlite3.connect('../database/production.db')
orders_conn = sqlite3.connect('../database/orderManagement.db')

order_cur = orders_conn.cursor()
inventory_cur = inventory_conn.cursor()

inventory = {}

for row in inventory_cur.execute('select id, inventory from products'):
    product_id, count = row
    inventory[product_id] = count

res = order_cur.execute('''   SELECT orderId, productId, count
                        FROM Orders
                        INNER JOIN OrderedProducts ON OrderedProducts.orderId = Orders.id
                        WHERE Orders.processed = 0;''')

unprocessed_orders = res.fetchall()
processed_orders = []

for unprocessed_order in unprocessed_orders:
    order_id, product_id, count = unprocessed_order
    if count <= inventory[product_id]:
        inventory[product_id] -= count
        processed_orders.append(tuple([order_id]))

print(processed_orders)
updated_inventory = []
for i in inventory:
    k = (inventory[i], i)
    updated_inventory.append(k)

order_cur.executemany(
    "update orders set processed = 1 where id = ?;", processed_orders)
inventory_cur.executemany(
    "update products set inventory = ? where id = ?", updated_inventory)

orders_conn.commit()
inventory_conn.commit()
print("done")
