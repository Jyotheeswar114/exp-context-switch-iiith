import { Kernel } from "./Kernel";

const kernel = new Kernel();

kernel.createProcess();
kernel.createProcess();
kernel.createProcess();
console.log(kernel.processes)
console.log(kernel.get_terminatable_procs());
// kernel.terminate(1);
console.log(kernel.get_terminatable_procs());
console.log(kernel.external_events);