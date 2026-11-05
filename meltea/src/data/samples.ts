export const melteaCounter = String.raw`type message = Increment | Decrement | Reset

let update message count =
  match message with Increment -> count + 1 | Decrement -> count - 1 | Reset -> 0

let view count =
  <div className="counter">
    <button onClick=Decrement>(Html.text "-")</button>
    <output>(Html.int count)</output>
    <button onClick=Increment>(Html.text "+")</button>
    <button onClick=Reset disabled=(count = 0)>(Html.text "reset")</button>
  </div>

let () = Option.iter (fun root -> ignore (Program.sandbox ~init:0 ~update ~view root)) root`;

export const melteaCompiled = String.raw`const template = View.template(Template.html("<div class=\"counter\"><button>-</button>…"),
  (scope, div) => {
    const minus = div.firstChild, output = minus.nextSibling, plus = output.nextSibling, …;
    return [handler_hole(scope, minus, "click"), text_hole({ parent: output, before: null }), …];
  });

const view = (count, dispatch) =>
  View.compiled(template, 2, (scope, holes) => {
    const sent = check(scope, 0, dispatch), counted = check(scope, 1, count); // one === each
    if (sent === Changed) set_handler(holes[0], () => dispatch(Decrement));  // first draw only
    if (counted === Changed) set_text(holes[1], String(count));
    …
  });`;

export const transitionView = String.raw`let view model =
  <ul className="todo-list">
    (Html.transition_group ~name:"fade" (Html.list (List.map row (visible model))))
  </ul>`;

export const transitionCss = String.raw`.fade-enter-from, .fade-leave-to { opacity: 0; }
.fade-enter-active, .fade-leave-active, .fade-move { transition: all 200ms; }`;

export const todoRow = String.raw`let row editing todo =
  let text = match editing with Editing { id; text } when id = todo.id -> Some text | _ -> None in
  <li key=(string_of_int todo.id) className=(...)>
    <div className="view">
      <input className="toggle" type_="checkbox" checked=(todo.status = Completed)
        onCheck=(fun _ -> Toggle todo.id) />
      <label onDoubleClick=(Edit todo.id)>(Html.text todo.title)</label>
      <button className="destroy" onClick=(Destroy todo.id) />
    </div>
    (Option.fold ~none:Html.none ~some:(fun text -> <input className="edit" value=text ... />) text)
  </li>`;

export const servedDune = String.raw`(executable                              ; the server, native
 (name server)
 (libraries meltea.server)
 (preprocess (pps meltea-ppx -server)))

(melange.emit                            ; the browser
 (target app)
 (libraries meltea)
 (preprocess (pps melange.ppx meltea-ppx -hydratable)))`;

export const servedCode = String.raw`(* server: the capture script, the model as data, the page *)
"<script>" ^ Melhole_server.capture ^ "</script>" ^ Melhole_server.data ~id:"model" (encode model)
^ "<div id=\"root\">" ^ Program.render ~view:Page.view model ^ "</div>"

(* browser: start from the server's model, no init and no commands run twice *)
Option.iter
  (fun text -> ignore (Program.sandbox ~start:Program.hydrate ~init:(decode text) ~update:Page.update ~view:Page.view root))
  (Melhole.Served.data ~id:"model")`;

export const melteaUse = String.raw`(melange.emit
 (target app)
 (libraries meltea)
 (preprocess (pps melange.ppx meltea-ppx)))`;

export const melteaPin = String.raw`opam pin add melhole meltea meltea-ppx https://github.com/jongleb/meltea.git`;

export const compiledWalk = String.raw`View.template (Template.html "<p>a<!---->b<!----><b></b></p>") (fun scope p ->
  let n0 = Template.first p in
  let n1 = Template.next n0 in
  ...
  (View.text_hole { parent = p; before = Template.next_or_end n0 }, ...))`;

export const selectorLeaf = String.raw`match selected with Some id when id = item.id -> "danger" | _ -> ""`;

export const serverWriter = String.raw`Melhole_server.markup w "<div class=\"counter\"><button>-</button><output";
Melhole_server.attribute w "class" (Some (if count < 0 then "negative" else ""));
Melhole_server.markup w ">";
Melhole_server.dynamic_text w (string_of_int count);
Melhole_server.markup w "</output><button>+</button><button";
Melhole_server.attribute w "disabled" (if count = 0 then Some "" else None);
Melhole_server.markup w ">reset</button></div>"`;

export const fanoutAlert = String.raw`File "todomvc.mlx", line 142, characters 19-44:
142 |            onInput=(fun text -> Retype text)
                         ^^^^^^^^^^^^^^^^^^^^^^^^^
Alert fanout: each input event here sends Retype, which changes editing;
the list at line 187 reads editing, so every input event checks all of its rows`;

export const melteaTests = String.raw`$ dune build && dune test && dune build @runtest-js && npx vitest run`;

export const viteRun = String.raw`$ npx vite                            # then open http://localhost:5173/examples/counter/`;

export const mlxDialect = String.raw`(dialect
 (name mlx)
 (implementation
  (extension mlx)
  (merlin_reader mlx)
  (preprocess
   (run mlx-pp %{input-file}))))`;
