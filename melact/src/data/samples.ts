export const melactDune = String.raw`- (libraries reason-react)
+ (libraries melact)
- (preprocess (pps reason-react-ppx))
+ (preprocess (pps melact-ppx))`;

export const melactFullCounter = String.raw`let[@react.component] make ~initial () =
  let count, setCount = React.useState (fun () -> initial) in
  let tone = if count < 0 then "negative" else "" in
  <div className="counter">
    <button onClick=(fun _ -> setCount (fun n -> n - 1))>(React.string "-")</button>
    <output className=tone>(React.int count)</output>
    <button onClick=(fun _ -> setCount (fun n -> n + 1))>(React.string "+")</button>
    <button onClick=(fun _ -> setCount (fun _ -> initial)) disabled=(count = initial)>
      (React.string "reset")
    </button>
  </div>`;

export const hookKeys = String.raw`(* you write *)
let count, setCount = React.useState (fun () -> 0)

(* melact-ppx emits *)
let __melhole_hook_2 = Melact_runtime.Hook.key ()
let count, setCount = (React.useState __melhole_hook_2) (fun () -> 0)`;

export const tryIt = String.raw`$ dune build                          # libraries and examples
$ dune build @runtest-js && npx vitest run
 ✓ test/view/view_test.mjs (17 tests)
 ✓ test/view/reconcile_test.mjs (9 tests)
 ✓ test/react/hooks_test.mjs (15 tests)
 ✓ test/dual/react/dual_test.mjs (11 tests)
 ✓ test/dual/melact/dual_test.mjs (11 tests)
$ dune test test/ppx                  # melact-ppx expect tests
$ npx vite                            # then open http://localhost:5173/examples/counter/`;

export const guardedRefresh = String.raw`View.compiled template 2 (fun scope (click, label, rows_hole) ->
  let count_changed = View.check scope 0 count in          (* one === against the last count *)
  let rows_changed = View.check scope 1 rows in
  View.set_handler click dec;                              (* handlers: swapped, never guarded *)
  (match count_changed with
   | Unchanged -> ()
   | Changed -> View.set_text label (string_of_int count));     (* evaluated only now *)
  match rows_changed with
  | Unchanged -> ()
  | Changed -> View.set_content rows_hole (React.array (Array.map row rows)))`;

export const compiledWalk = String.raw`View.template (Template.html "<p>a<!---->b<!----><b></b></p>") (fun scope p ->
  let n0 = Template.first p in
  let n1 = Template.next n0 in
  ...
  (View.text_hole { parent = p; before = Template.next_or_end n0 }, ...))`;

export const selectorLeaf = String.raw`match selected with Some id when id = item.id -> "danger" | _ -> ""`;

export const mlxDialect = String.raw`(dialect
 (name mlx)
 (implementation
  (extension mlx)
  (merlin_reader mlx)
  (preprocess
   (run mlx-pp %{input-file}))))`;

export const hydratablePps = String.raw`(pps melact-ppx -hydratable)`;
