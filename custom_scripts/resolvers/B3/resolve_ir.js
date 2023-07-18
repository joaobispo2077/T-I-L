const path = require("path");

const csvFilePath = path.join(__dirname, "movimentacao.csv");

const csv = require('csvtojson');

function parseLocaleNumber(stringNumber, locale) {
  const thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
  const decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');


  const parsedNumber = parseFloat((stringNumber
    .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
    .replace(new RegExp('\\' + decimalSeparator), '.')
    .replace("R$", "")
    .trim()
  )
  );
  console.log("@parsedNumber");
  console.log(parsedNumber);
  return Number.isNaN(parsedNumber) ? 0 : parsedNumber;
}

const calculateMidPrice = (negotiationList) => {
  const ticketObject = negotiationList.reduce((ticketAcumulator, currentNegotiation) => {

    const isTicketInMidPrice = ticketAcumulator[currentNegotiation.ticket];


    if (isTicketInMidPrice) {
      const quantity = Number(ticketAcumulator[currentNegotiation.ticket].quantity) + Number(currentNegotiation.quantity);
      const totalPrice = Number(ticketAcumulator[currentNegotiation.ticket].totalPrice) + Number(currentNegotiation.totalPrice);

      ticketAcumulator[currentNegotiation.ticket] = {
        quantity,
        totalPrice,
      }
    } else {
      ticketAcumulator[currentNegotiation.ticket] = {
        quantity: Number(currentNegotiation.quantity),
        totalPrice: Number(currentNegotiation.totalPrice),
      };
    }

    return ticketAcumulator;
  }, {});

  const negotiationsWithMiddlePrice = Object.keys(ticketObject).map(ticket => {
    const middlePrice = ticketObject[ticket].totalPrice / ticketObject[ticket].quantity;

    return {
      middlePrice,
      ticket,
      quantity: ticketObject[ticket].quantity,
      totalPrice: middlePrice * ticketObject[ticket].quantity
    }
  });

  return negotiationsWithMiddlePrice;
}

// const negotiationType = new Map([
//   ['Rendimento', 'receivedYield'],
//   ['Juros Sobre Capital Próprio', 'receivedFees'],
//   ['Dividendo', 'receivedDividend'],
// ]);

// const calculateTotalReceivedByTicketAndType = (negotiationList) => {
//   // [  {
//   //     ticket: "itausa",
//   //     receivedDividend: 0,
//   //     receivedFees: 0,
//   //     receivedYeld: 0,
//   //   }]

//   const totalReceivedList = negotiationList.reduce((ticketAcumulatorList, currentNegotiation) => {

//     const isTicketInList = ticketAcumulatorList.find(ticket => ticket.ticket === currentNegotiation.ticket);

//     if (isTicketInList) {

//     } else {
//       return ticketAcumulatorList.concat({
//         ticket: currentNegotiation.ticket,
//         negotiationType.values(),
//         [negotiationType.get(currentNegotiation.type)]: currentNegotiation.totalPrice,
//       });
//     }

//     return ticketAcumulator;
//   }, []);





// };

const resolveIR = async () => {
  const listNegotiations = await csv().fromFile(csvFilePath);


  const parsedNegotiationList = listNegotiations.map(negotiation => ({
    ticket: negotiation['Produto'],
    quantity: parseFloat(negotiation['Quantidade']),
    unityPrice: parseLocaleNumber(negotiation['Preço unitário'].trim(), "pt-BR"),
    totalPrice: parseLocaleNumber(negotiation['Valor da Operação'], "pt-BR"),
    type: negotiation['Movimentação']
  }));

  const buyTerms = ['Bonificação em Ativos', 'Transferência - Liquidação'];
  const buyNegotiations = parsedNegotiationList.filter(negotiation => buyTerms.includes(negotiation.type));

  console.log(listNegotiations);
  console.log(parsedNegotiationList);
  const middlePrice = calculateMidPrice(buyNegotiations);


  console.log("===== PREÇO MÉDIO DOS ATIVOS ====");
  console.log(middlePrice);


  const receivedTerms = ['Rendimento', 'Juros Sobre Capital Próprio', 'Dividendo'];
  const receivedNegotiations = parsedNegotiationList.filter(negotiation => receivedTerms.includes(negotiation.type));

  console.log("===== RECEBIMENTOS ====");

  const totalReceivedByTicketAndType = calculateTotalReceivedByTicketAndType(receivedNegotiations);

  console.log(totalReceivedByTicketAndType);
};

resolveIR();
module.exports = { resolveIR };
