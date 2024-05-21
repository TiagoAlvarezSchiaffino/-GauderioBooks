import React from "react";
import Accordion from "../../accordion/Accordion";

const Faq = () => {
  
  return (
    <main className="w-full pb-44">
      <div className="w-3/5	m-auto py-5">
        <h1 className="text-4xl p-3 bg-gray-200 rounded text-[#690202] font-bold ">
          Preguntas frecuentes:
        </h1>
        <div className="py-5">
          <Accordion
            title={"CÓMO COMPRAR:"}
            classTitle={
              "text-2xl text-[#822626] text-left p-1 w-full h-10 font-bold  rounded border-[#525252] hover:bg-gray-200"
            }
            content={
              <>
                <div>PROCESO DE COMPRA</div>
                <p>
                  Comprar en nuestra librería es muy sencillo, sólo debes seguir
                  los siguientes pasos:
                </p>
                <ol className="list-decimal">
                  <li>
                  </li>
                  <li>
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
                  </li>
                  <li>
                  </li>
                  <li>
                  </li>
                  <li>
                  </li>
                </ol>
              </>
            }
            classContent={"text-[#525252] px-5 py-2 "}
            classAccordion={""}
          />
          <Accordion
            title={"MEDIOS DE PAGO"}
            classTitle={
              "text-2xl text-[#822626] text-left p-1 w-full h-10 font-bold  rounded hover:border-5 hover:border-[#525252] hover:bg-gray-200"
            }
            content={
              <>
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
              </>
            }
            classContent={"text-[#525252] px-5 py-2"}
            classAccordion={""}
          />
          <Accordion
            title={"ENVÍOS"}
            classTitle={
              "text-2xl text-[#822626] text-left p-1 w-full h-10 font-bold  rounded hover:border-5 hover:border-[#525252] hover:bg-gray-200"
            }
            content={
              <>
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
                </p>
              </>
            }
            classContent={"text-[#525252] px-5 py-2"}
            classAccordion={""}
          />

          <Accordion
            title={"DEVOLUCIONES"}
            classTitle={
              "text-2xl text-[#822626] text-left p-1 w-full h-10 font-bold  rounded hover:border-5 hover:border-[#525252] hover:bg-gray-200"
            }
            content={
              <>
                <div className="p-1 font-bold">POLITICA DE DEVOLUCIONES</div>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
              </>
            }
            classContent={"text-[#525252] px-5 py-2"}
            classAccordion={""}
          />
          <Accordion
            title={"TÉRMINOS Y CONDICIONES"}
            classTitle={
              "text-2xl text-[#822626] text-left p-1 w-full h-10 font-bold  rounded hover:border-5 hover:border-[#525252] hover:bg-gray-200"
            }
            content={
              <>
                <p className="p-1 font-bold">
                </p>
                <p className="p-1 font-bold">
                  1) OBJETO Y ÁMBITO DE APLICACIÓN
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  2) ACEPTACIÓN Y PRUEBA DE ACEPTACIÓN
                </p>
                <p>
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  3) PRECIOS, FORMA DE PAGO, ENTREGA Y DESISTIMIENTO
                </p>
                <p className="p-1 font-bold">3.1 Precios</p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">3.2 Forma de pago</p>
                <p>
                </p>
                <p>
                </p>
                <p></p>
                <p></p>
                <p className="p-1 font-bold">3.3 Entrega</p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  4) TRÁMITES PARA CELEBRAR EL CONTRATO
                </p>
                <p>
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  5) GARANTÍA LEGAL Y RESPONSABILIDADES DE LA COMPAÑÍA
                </p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  6) RESPONSABILIDADES DEL CLIENTE
                </p>
                <p>
                </p>
                <p className="p-1 font-bold">7) SERVICIOS POSTVENTA</p>
                <p>
                </p>
                <p className="p-1 font-bold">
                  8) PROPIEDAD INDUSTRIAL E INTELECTUAL
                </p>
                <p>
                </p>
              </>
            }
            classContent={"text-[#525252] px-5 py-2"}
            classAccordion={""}
          />
        </div>
      </div>
    </main>
  );
};

export default Faq;