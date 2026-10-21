# Build spec (shared)
Root: E:\Engineering Subjects\CSE\Design and Analysis of Algorithms (DAA)
Course: CS3003E DAA, NIT Calicut, Monsoon 2026. Textbooks: Dasgupta-Papadimitriou-Vazirani (DPV), CLRS 4e, Levitin, Kleinberg-Tardos, Erickson, Roughgarden. Write accurate content from your knowledge of these books. Cite chapter/section in notes ("Ref: CLRS Ch.4").
Topics: T1 Foundations & Divide&Conquer; T2 Greedy; T3 Dynamic Programming; T4 NP-Completeness (see DAA courseplan.pdf in root for exact subtopic lists).
Plain static HTML, no external libs, no build step. Math as plain text/Unicode (O(n log n), T(n)=2T(n/2)+n, ≤, Σ, θ). Use <pre><code> for pseudocode. Escape < > & in HTML (&lt; etc.) inside code/text.

## Notes page skeleton (Notes/html/tN-name.html)
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>…</title><link rel="stylesheet" href="../../assets/style.css"></head><body><main><nav class="top"><a href="../../index.html">← Home</a></nav><h1>…</h1><p class="sub">…</p> …sections h2/h3, p, table, pre, div.box (def/idea) div.box.key (key result) div.box.warn (pitfall)… </main></body></html>
Notes must cover EVERY listed subtopic: definition/intuition, algorithm (pseudocode), correctness idea, complexity analysis, a small worked example, common pitfalls. Concise but complete (revision notes), end with "Quick revision" bullet list.

## Quiz page (Quizzes/tN-name.html) — 30 MCQs, 4 options each, mix of conceptual / trace / complexity-calculation / "which technique", increasing difficulty; correct answers spread evenly over A-D (ans is 0-3 index). Every item's `why` explains why the right option is right AND why the tempting wrong ones are wrong.
<!doctype html><html lang="en"><head>…same head with href="../assets/style.css"…</head><body><main><nav class="top"><a href="../index.html">← Home</a></nav><h1>…</h1><div id="app"></div></main>
<script>window.QUIZ={items:[{q:"…",opts:["…","…","…","…"],ans:1,why:"…"},…]};</script><script src="../assets/quiz.js"></script></body></html>

## Exam page (Exams/name.html)
Same head/main/nav ("../index.html", css "../assets/style.css"), h1 title, <p class="meta"><span>Time: …</span><span>Max marks: …</span></span></p>, <div id="app"></div>, then
<script>window.EXAM={instructions:["…"],sections:[{name:"Part A — …",note:"…",qs:[{q:"html",marks:2,co:"CO1",ans:"detailed worked html solution/explanation"}]}]};</script><script src="../assets/exam.js"></script>
Answers must be explanatory (steps, recurrence/solution, table filled, reasoning, marking points), not just final results. Marks per section must add exactly to the paper total. Questions need choice (e.g. "answer any 2 of 3") only where stated; if choice used, count only the required ones in the total and say so in note. Verify every numeric answer by hand carefully; if code execution helps, use python via Bash to check computations (scratch files go to the scratchpad dir, not the root).
Avoid duplicating questions between papers. Vary styles: derive, trace, design an algorithm, prove, analyse, reduce.
