const quotes = [
  {
    quote: "나는 내가 더 노력할 수록 운이 더 좋아진다는 것을 발견했다. ",
    author: "- 토마스 제퍼슨",
  },
  {
    quote:
      "가장 큰 영광은 한 번도 실패하지 않음이 아니라, 실패할 때마다 다시 일어서는데에 있다. ",
    author: "- 공자",
  },
  {
    quote: "희망이 있는 곳에 반드시 시련이 있는 법이다. ",
    author: "- 무라카미 하루키",
  },
  {
    quote: "성공으로 가는 길과 실패로 가는 길은 거의 똑같다. ",
    author: "- 콜린 R, 데이비스",
  },
  {
    quote: "패배의 공포가 승리의 짜릿함보다 커지게 하지마라. ",
    author: "- 로버트 기요사키 ",
  },
  {
    quote:
      "세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다. ",
    author: "- 데일 카네기",
  },
  {
    quote: "계단 전체를 볼 필요가 없습니다. 첫 걸음 만 밟으면됩니다. ",
    author: "- 알버트 슈바이처",
  },
  {
    quote:
      "정말로 무언가를하고 싶다면 방법을 찾을 수 있습니다. 그렇지 않으면 변명을 찾을 수 있습니다. ",
    author: "- 마하트마 간디",
  },
  {
    quote:
      "당신이 매일하는 일을 바꿀 때까지 당신은 결코 당신의 삶을 바꿀 수 없습니다. ",
    author: "- 짐 론",
  },
  {
    quote: "- 그대는 왜 평범하게 노력하는가, 시시하게 살질 바라지 않으면서",
    author: " 미상",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
