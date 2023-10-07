/* Estecomponenete nos devuelve el login pero entre un div sin necesidad de llamarlo
ya que lo llamamos desde el render principal */ 

export default function AuthLayout({
    children
}:{
    /* con esto le indicamos que puede recibir cualquier cosa, entre strings, arrays, etc, mediante props*/
    /* metodos de typescript */
    children: React.ReactNode
}) {
    return (
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
    )
}