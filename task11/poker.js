const cardValues = {
  '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
};

function parseHand(hand) {
  return hand.split(' ').map(card => ({
    value: cardValues[card.slice(0, -1)],
    suit: card.slice(-1)
  }));
}

function getHandRank(hand) {
  const values = hand.map(card => card.value).sort((a, b) => b - a);
  const suits = hand.map(card => card.suit);
  const isFlush = suits.every(suit => suit === suits[0]);
  const isLowStraight = values.join(',') === '14,5,4,3,2';
  const isStraight = values.every((value, index) => index === 0 || values[index - 1] - value === 1) || isLowStraight;
  if (isFlush && isStraight) {
    return { rank: 8, values: isLowStraight ? [5, 4, 3, 2, 1] : values };
  }
  const valueCounts = values.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
  const counts = Object.values(valueCounts).sort((a, b) => b - a);
  if (counts[0] === 4) {
    return { rank: 7, values: Object.keys(valueCounts).map(Number).sort((a, b) => valueCounts[b] - valueCounts[a]) };
  }
  if (counts[0] === 3 && counts[1] === 2) {
    return { rank: 6, values: Object.keys(valueCounts).map(Number).sort((a, b) => valueCounts[b] - valueCounts[a] || b - a) };
  }
  if (isFlush) {
    return { rank: 5, values };
  }
  if (isStraight) {
    return { rank: 4, values: isLowStraight ? [5, 4, 3, 2, 1] : values };
  }
  if (counts[0] === 3) {
    return { rank: 3, values: Object.keys(valueCounts).map(Number).sort((a, b) => valueCounts[b] - valueCounts[a] || b - a) };
  }
  if (counts[0] === 2 && counts[1] === 2) {
    return { rank: 2, values: Object.keys(valueCounts).map(Number).sort((a, b) => valueCounts[b] - valueCounts[a] || b - a) };
  }
  if (counts[0] === 2) {
    return { rank: 1, values };
  }
  return { rank: 0, values };
}

function compareHands(a, b) {
  const rankA = getHandRank(a);
  const rankB = getHandRank(b);
  if (rankA.rank !== rankB.rank) {
    return rankB.rank - rankA.rank;
  }
  for (let i = 0; i < rankA.values.length; i++) {
    if (rankA.values[i] !== rankB.values[i]) {
      return rankB.values[i] - rankA.values[i];
    }
  }
  return 0;
}

function bestHands(hands) {
  const parsedHands = hands.map(parseHand);
  const rankedHands = parsedHands.map(hand => ({ hand, rank: getHandRank(hand) }));
  const maxRank = Math.max(...rankedHands.map(h => h.rank.rank));
  const bestHands = rankedHands.filter(h => h.rank.rank === maxRank);
  if (bestHands.length === 1) {
    return [hands[parsedHands.indexOf(bestHands[0].hand)]];
  }
  bestHands.sort((a, b) => compareHands(a.hand, b.hand));
  const bestHand = bestHands[0].hand;
  return hands.filter((hand, index) => compareHands(parsedHands[index], bestHand) === 0);
}

module.exports = { bestHands };