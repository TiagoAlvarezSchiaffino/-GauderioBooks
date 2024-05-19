import React from "react";

const Faq = () => {
  return (
    <main className="w-full">
      <div className="w-3/5	m-auto">
        <h1 className="text-4xl p-3">Preguntas frecuentes:</h1>
        <div className="py-5">
          <h2 className="text-2xl p-3">CÓMO COMPRAR:</h2>
          <div>
            <h3>PROCESO DE COMPRA</h3>
            <p>
              Comprar en nuestra librería es muy sencillo, sólo debes seguir los
              siguientes pasos:
            </p>
            <ol className="list-decimal">
              <li>
                Elige el libro que te interesa. A través de un click conseguirás
                una ampliación de la fotografía y la información correspondiente
                al producto (características, descripción, reseña y precio).
              </li>
              <li>
                Haz click en COMPRAR. A continuación puedes elegir continuar en
                el sitio o finalizar la compra.{" "}
              </li>
              <li>
                Si deseas finalizar tu compra deberás hacerlo identificándote
                mediante tu email, facebook o cuenta de gmail. Te recomendamos
                registrarte así no deberás definir tu dirección de envío la
                proxima vez que realices una compra. Para esto entra en &quot;Mi
                cuenta&quot; en la pagina principal.
              </li>
              <li>
                Luego deberás ingresar los datos de facturación con tu nombre,
                documento de identidad y un teléfono. En caso de necesitar
                factura con RUT es aquí donde deberás ingresar los datos.
                También podrás revisar y modificar tu compra. Una vez ingresados
                los datos da click en CONTINUAR.
              </li>
              <li>
                En la página de datos de envío deberás seleccionar si deseas
                recibir el pedido en una dirección solicitada o retirar en
                sucursal. En caso de elegir enviar a dirección, deberás ingresar
                la dirección en la cual deseas recibir el paquete y luego elegir
                el método de envío. En caso de seleccionar retiro en sucursal
                deberás seleccionar en cuál deseas retirar tu paquete.
              </li>
              <li>
                Lee y acepta los Términos y Condiciones y haz click en
                CONTINUAR.
              </li>
              <li>
                Deberás seleccionar el método de pago y aprobar el pedido. En
                los casos de las tarjetas de crédito, serás dirigido a las
                pasarelas de pago de las tarjetas y, una vez ingresados los
                datos de tu tarjeta, la compra queda confirmada.{" "}
              </li>
              <li>
                Es importante aclarar que el descuento para las tarjetas de
                Scotiabank NO ES AUTOMÁTICO. Debes seleccionarlo antes de
                finalizar la compra.
                <p>A modo de ejemplo:</p>
              </li>
              <li>
                Recibirás un email confirmando tu pedido junto con los detalles
                de entrega.
              </li>
              <li>
                Recibirás tambien un email con la factura correspondiente a tu
                compra, en un plazo no mayor a 48hrs hábiles.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Faq;