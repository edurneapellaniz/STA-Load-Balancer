
export const label = 'Round-robin';
export default class RoundRobin {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
    this.servers = servers;
    this.next=0;
    this.c=0;
  }
  
  
   onRequestArrival(request, sendToServer) {
    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }
    const server = this.servers[this.next];
    if (this.c<server.power){
      this.next=this.next;
      this.c++;
    }
    else{
      this.next=(this.next + 1 ) % this.servers.length;
      this.c=0;
    }
    
    

    // Envía la petición al servidor y devuelve su respuesta al cliente.
    return sendToServer(server.id);
  }
}
