# localfiscal product demo

Recorded local output from v0.2.0. Synthetic data, edited replay; no external provider calls.

### SHOT add
- target: terminal
- url: index.html?scene=add
- narration: Localfiscal keeps a receipt and transaction ledger on your own machine. In a fresh scratch database, I add fictional client income and an office expense. No bank account or cloud service is involved.
- action: goto url="index.html?scene=add"
- action: wait ms=400

### SHOT report
- target: terminal
- url: index.html?scene=report
- narration: The generated report keeps the currencies separate and represents the amounts as integer minor units. This small example is a local bookkeeping demonstration, not financial or tax advice.
- action: goto url="index.html?scene=report"
- action: wait ms=400

### SHOT export
- target: terminal
- url: index.html?scene=export
- narration: Then export the same two transactions as CSV. This records and reports what I supplied; it does not reconcile a bank account. The source and local setup are linked below.
- action: goto url="index.html?scene=export"
- action: wait ms=400
