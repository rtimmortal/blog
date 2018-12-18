type OnLoaded = () => void;
let execute_on_load:OnLoaded | undefined;

export function on_loaded(fun:OnLoaded) {
  execute_on_load = fun;
}

export function initiate_load() {
  if (execute_on_load) {
    execute_on_load();
    execute_on_load = undefined;
  }
}