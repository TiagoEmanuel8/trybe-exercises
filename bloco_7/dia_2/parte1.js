const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone ${order.phoneNumber}, R. ${order.address.street} Nº: ${order.address.number}, AP: ${order.address.apartment}.`)
  }
  customerInfo(order);


const orderModifier = (order) => {
    //adicionando um nome
    const client = order.name = 'Luiz Silva';
    order.order.flavor = {};
    //adicionando um objeto dentro de outro objeto
    order.order.flavor['mussarela'] = {amount: 1, price: 25};
    order.order.flavor['calabresa'] = {amount: 1, price: 25};
    //acessando as chaves do objeto criado
    const pizzas = Object.keys(order.order.flavor);
    //acessando a bebida
    const soda = order.order.drinks.coke.type; 
    //atualizando o valor do pedido
    const total = order.payment.total = '60';
    console.log(`Olá ${client}, o total do seu pedido de ${pizzas} e ${soda} é R$ ${total},00.`);
  }
  orderModifier(order);
 