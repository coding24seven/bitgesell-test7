# Take‑Home Assessment

## Objectives

### 🔧 Backend (Node.js)

1. **Refactor blocking I/O**  
   - `src/routes/items.js` uses `fs.readFileSync`. replaced with fs.readFile async variety.

2. **Performance**  
   - `GET /api/stats` used memoization npm package, though I could've just taken a hash of the files and compare the current one with the previous

3. **Testing**  
   - That's all the tests I had time for.

### 💻 Frontend (React)

1. **Memory Leak**  
   - `Items.js` You can simulate umount. See explanation in relevant comment

2. **Pagination & Search**  
   - used input of type number for page navigation, so not pretty but works if you don't stress it :-). If I had more time I'd test it thoroughly, fix, and optimize, but it is what it is.

3. **Performance**  
   - used `react-window`, though I'm not quite happy with the scrolling atm.

4. **UI/UX Polish**  
   - I'd use Material UI or whatever fits business theme if given time
