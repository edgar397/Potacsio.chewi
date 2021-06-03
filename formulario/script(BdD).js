const indexedDB =window.indexedDB;

let db 

 const conexion = indexedDB.open('datosuser',1)

conexion.onsuccess = () =>{
db = conexion.result
console.log('la base de datos esta lista', db)
}

conexion.onupgradeneeded = (e) => {
    db = e.target.result
    console.log('Base de datos creada', db)
    const coleccionObjetos = db.createObjectStore('usuario', {
        keyPath: 'cuenta' 
})
}

conexion.onerror = (error) =>{
console.log('Error', error) 
}
 const agregar = (info) =>{
     const transacion = db.transaction(['usuario'],'readwrite')
     const coleccionObjetos = transacion.objectStore('usuario')
     const conexion = coleccionObjetos.add(info)
     consultarx()
  }
  const obtener = (cuenta)=>{
    const transacion = db.transaction(['usuario'],'readonly')
    const coleccionObjetos = transacion.objectStore('usuario')
    const conexion = coleccionObjetos.get(cuenta)
    conexion.onsuccess = (e) =>{
        console.log(conexion.result)
    }           
  }
  const consultarx = ()=>{
         const transacion = db.transaction(['usuario'],'readonly')
         const coleccionObjetos = transacion.objectStore('usuario')
         const conexion = coleccionObjetos.openCursor()
       
         console.log('lista de usuarios') 
       conexion.onsuccess = (e) =>{
             const cursor = e.target.result
             if(cursor){
                 console.log(cursor.value)
                 cursor.continue()
             }  
             else{
                 console.log('no hay usuarios en la lista')  
                
             }
         }
  }

