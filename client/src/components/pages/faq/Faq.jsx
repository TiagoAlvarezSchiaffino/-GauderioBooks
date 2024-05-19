import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionPanel,
    AccordionTitle,
  } from "flowbite-react";

const Faq = () => {
  return (
    <main className="w-full pb-52">
      <div className="w-3/5	m-auto">
        <h1 className="text-4xl p-3 bg-[#525252] text-[#f9f9f8] font-bold ">
          Preguntas frecuentes:
        </h1>
        <div className="py-5">
        <Accordion collapseAll>
            <AccordionPanel>
              <AccordionTitle>
                <div className="text-2xl text-[#822626] font-bold">
                  CÓMO COMPRAR:
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="text-[#525252] p-3">
                  <div>PROCESO DE COMPRA</div>
                  <p>
                    Comprar en nuestra librería es muy sencillo, sólo debes
                    seguir los siguientes pasos:
                  </p>
                  <ol className="list-decimal">
                    <li>
                      Elige el libro que te interesa. A través de un click
                      conseguirás una ampliación de la fotografía y la
                      información correspondiente al producto (características,
                      descripción, reseña y precio).
                    </li>
                    <li>
                      Haz click en COMPRAR. A continuación puedes elegir
                      continuar en el sitio o finalizar la compra.{" "}
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                    </li>
                    <li>
                      Lee y acepta los Términos y Condiciones y haz click en
                      CONTINUAR.
                    </li>
                    <li>
                      Deberás seleccionar el método de pago y aprobar el pedido.
                      En los casos de las tarjetas de crédito, serás dirigido a
                      las pasarelas de pago de las tarjetas y, una vez
                      ingresados los datos de tu tarjeta, la compra queda
                      confirmada.{" "}
                    </li>
                    <li>
                    </li>
                    <li>
                      Recibirás un email confirmando tu pedido junto con los
                      detalles de entrega.
                    </li>
                    <li>
                      Recibirás tambien un email con la factura correspondiente
                      a tu compra, en un plazo no mayor a 48hrs hábiles.
                    </li>
                  </ol>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                <div className="text-2xl text-[#822626] font-bold">
                  MEDIOS DE PAGO
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="text-[#525252] p-3">
                  <div className="p-1 font-bold">MEDIOS DE PAGO</div>
                  <p>
                  </p>
                  <div className="p-1 font-bold">Tarjeta de crédito</div>
                  <p>
                  </p>
                  <div className="p-1 font-bold">
                    ¿Puedo obtener una factura a nombre de mi empresa?{" "}
                  </div>
                  <p>
                  </p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                <div className="text-2xl text-[#822626] font-bold">ENVÍOS</div>
              </AccordionTitle>
              <AccordionContent>
                <div className="text-[#525252] p-3">
                  <div className="p-1 font-bold">1. PICK UP CENTER </div>
                  <p>
                  </p>
                  <p className="p-1 font-bold">
                  </p>
                  <p>
                  </p>
                  <div className="p-1 font-bold">
                    2. ENVÍOS DIRECTOS A TODO EL PAÍS
                  </div>
                  <p>
                    Entregamos en todo el país, en Montevideo puede demorar
                    hasta 3 días hábiles siguientes a su pedido y en el interior
                    hasta 5 días hábiles siguientes.
                  </p>
                </div>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                <div className="text-2xl text-[#822626] font-bold">
                  DEVOLUCIONES
                </div>
              </AccordionTitle>
              <AccordionContent>
                <div className="text-[#525252] p-3">
                  <div className="p-1 font-bold">POLITICA DE DEVOLUCIONES</div>
                  <p>
                  </p>
                </div>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default Faq;