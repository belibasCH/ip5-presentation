import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';


let deck = new Reveal({
   plugins: [ Markdown, RevealHighlight, RevealChart ],
})
deck.initialize({
        chart: {
            defaults: {
                color: 'black', // color of labels
                scale: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 },
                    grid: { color: "lightgray" } , // color of grid lines
                },
            },
            line: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ], "borderDash": [ [5,10], [0,0] ] },
            bar: { backgroundColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]},
            pie: { backgroundColor: [ ["rgba(30,30,30,.8)" , "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"] ]},
        }
}
);