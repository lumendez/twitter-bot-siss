var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var elementos = [
  ["SECRETARIA DE ECONOMIA", "COMERCIO EXTERIOR"],
  ["PROYECTO DE EXTENCION CULTURAL", "APOYO EN EL AREA ADMINISTRATIVA DEL PROYECTO DE EXTENSION CULTURAL"],
  ["COORDINACION GENERAL DE PROTECCION CIVIL", "SISTEMA DE EMERGENCIAS 2012"],
    ["PROMÉXICO","CAPTACIÓN DE INVERSIÓN EXTRANJERA A TRAVÉS DEL DESARROLLO DE LA COMUNIDAD EXPORTADORA"],
  ["HONORABLE AYUNTAMIENTO CONSTITUCIONAL DE TLALNEPANTLA DE BAZ","MULTIDISCIPLINARIO DE SERVICIO SOCIAL"],
  ["DIRECCIÓN GENERAL DE RECURSOS HUMANOS","PROTECCIÓN Y DIFUSIÓN DE LOS DERECHOS HUMANOS"],
  ["SUBDIRECCION ACADEMICA","APLICACIÓN DEL ENFOQUE DE PROCESOS A LA SUBDIRECCIÓN ACADÉMICA DE LA UPIICSA-IPN"],
  ["ADMINISTRACION DE SERVICIOS EDUCATIVOS EN EL DISTRITO FEDERAL","PROGRAMA DE EVALUACIÓN INTEGRAL DE PROCESOS Y PROYECTOS EDUCATIVOS"],
  ["SERVICIO NACIONAL DE SANIDAD, INOCUIDAD Y CALIDAD AGROALIMENTARIA","MEDIDAS FITOSANITARIAS ASOCIADAS A LA IMPORTACIÓN"],
  ["DIRECCION GENERAL DE DESARROLLO SOCIAL","SERVICIOS SOCIALES A LA COMUNIDAD"],
  ["ÁREA DE GESTIÓN PARA LA CAPACITACIÓN DEL INSTITUTO DE DIAGNÓSTICO Y REFERENCIA EPIDEMIÓLOGICOS","SISTEMAS PARA EL DIAGNÓSTICO DE LABORATORIO CON IMPACTO EN SALUD PÚBLICA"],
  ["H. AYUNTAMIENTO DE TULTITLAN","BUSCAR EL DESARROLLO SOCIAL DE LA COMUNIDAD DE TULTITLAN"],
  ["SECRETARIA DE SALUD","DESARROLLO DE PROFESIONALES ADMINISTRATIVOS EN SALUD"],
  ["PRESIDENCIA MUNICIPAL DE PACHUCA DE SOTO, HIDALGO.","FORTALECIMIENTO DE PREVENCIÓN DE ADICCIONES"],
  ["IMSS DELEGACION NORTE DF","SEGURIDAD Y SOLIDARIDAD SOCIAL"],
  ["INSTITUTO NACIONAL DE PSIQUIATRÍA RAMÓN DE LA FUENTE MUÑIZ","SINTOMAS RESIDUALES DEL TRASTORNO DEPRESIVO MAYOR: MANEJO CON MUSICOTERAPIA"],
  ["LABORATORIO CENTRAL DE EPIDEMIOLOGIA CMN LA RAZA IMSS","SERVICIO SOCIAL EN GESTIÓN DE CALIDAD EN LABORATORIOS CLINICOS"],
  ["LABORATORIOS DE BIOLOGICOS Y REACTIVOS DE MEXICO, S.A. DE C.V.","APOYO AL AREA TECNICA"],
  ["MUSEO ESTUDIO DIEGO RIVERA","FOMENTO, ENSEÑANZA, INVESTIGACIÓN Y DIFUSIÓN DEL ARTE Y LA CULTURA"],
  ["INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS EN LA CIUDAD DE MÉXICO","DESARROLLO DE LA EDUCACION BASICA PARA LOS ADULTOS EN EL DISTRITO FEDERAL"],
  ["INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS","EVALUACIÓN INSTITUCIONAL"],
  ["INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS","DIPLOMADO DE ALGEBRA PARA FIGURAS EDUCATIVAS"],
  ["INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS","SERVICIOS DE CALIDAD EN EL INEA"],
  ["INSTITUTO NACIONAL PARA LA EDUCACION DE LOS ADULTOS","ASEGURAMIENTO DE LA CALIDAD"],
  ["COMISION DE OPERACION Y FOMENTO DE ACTIVIDADES ACADEMICAS DEL IPN","IMPULSO, ADECUACIÓN DE ACTIVIDADES AUXILIARES A LA COFAA_IPN"],
  ["DIRECCIÓN GENERAL DE DESARROLLO ECONÓMICO","ACEITES Y LUBRICANTES USADOS"],
  ["MUSEO DE ARTE MODERNO","APOYO  EN EL MUSEO DE ARTE"],
  ["MUSEO MURAL DIEGO RIVERA","APOYO EN LA INVESTIGACIÓN Y ACTIVIDADES EDUCATIVAS EN EL MUSEO MURAL DIEGO RIVERA"],
  ["DIRECCION DE RECURSOS FINANCIEROS","APOYO PARA LA FISCALIZACION Y CAPTURA  DE  DOCUMENTACION DEL GASTO DE LOS CENTROS DE TRABAJO"],
  ["MUSEO DE ARTE MODERNO","APOYO TÉCNICO EN EL MUSEO DE ARTE MODERNO"],
  ["MUSEO DEL PALACIO DE BELLAS ARTES","CONOCE, DISFRUTA Y COMPARTE EL MUSEO DEL PALACIO DE BELLAS ARTES"],
  ["MUSEO NACIONAL DE SAN CARLOS","EL ARTE DE ACERCARTE AL ARTE"],
  ["CENTRO NACIONAL DE INVESTIGACIÓN, DOCUMENTACIÓN E INFORMACIÓN DE ARTES PLÁSTICAS","FOMENTAR, DOCUMENTAR Y DESARROLLAR EL ARTE"],
  ["PROYECTO DE EXTENCION CULTURAL","INTEGRARTE LAS ARTES A TU ALCANCE"],
  ["MUSEO NACIONAL DE ARTE","PARTICIPACION DE LOS PRESTADORES DE SERVICIO SOCIAL  EN EL DESARROLLO DE LOS  PROGRAMAS SUSTANTIVOS"],
  ["PROYECTO DE EXTENCION CULTURAL","PASAPORTE DEL ARTE"],
  ["MUSEO DE ARTE CONTEMPORÁNEO INTERNACIONAL RUFINO TAMAYO","PROGRAMA DEL DEPARTAMENTO DE EDUCACIÓN PARA SERVICIO SOCIAL EN EL MUSEO TAMAYO"],
  ["COORDINACION NACIONAL DE ARTES VISUALES","APOYO EN EL DEPARTAMENTO DE EXPOSICIONES INTERNACIONALES"],
  ["COORDINACION NACIONAL DE ARTES VISUALES","APOYO EN INVESTIGACIÓN MUSEOLÓGICA Y EXPOSICIONES"],
  ["MUSEO ESTUDIO DIEGO RIVERA","APOYO INFORMATICO EN EL MUSEO ESTUDIO DIEGO RIVERA"],
  ["SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS","APOYO ADMINISTRATIVO A LA SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS"],
  ["COORDINACION NACIONAL DE ARTES VISUALES","APOYO EN LA INVESTIGACION MUSEOLOGICA Y EXPOSICIONES"],
  ["COORDINACION GENERAL DE PROTECCION CIVIL","INVENTARIO DE ARCHIVOS Y APOYO ADMINISTRATIVO"],
  ["MUSEO NACIONAL DE LA ESTAMPA","PARTICIPACION ESCOLAR A TRAVES DE LA CULTURA"],
  ["MUSEO DEL PALACIO DE BELLAS ARTES","SERVICIO SOCIAL EN EL MUSEO DEL PALACIO DE BELLAS ARTES. MEDIACIÓN"],
  ["MUSEO DE ARTE MODERNO","APOYO TECNICO EN EL MUSEO DE ARTE MODERNO 2012"],
  ["SUBDIRECCION DE EMPLEO Y REMUNERACIONES","CONTROL PRESUPUESTAL"],
  ["LABORATORIO ARTE ALAMEDA","PROYECTO DE EXHIBICION, DOCUMENTACION Y FORMACION EN ARTE Y TECNOLOGIA"],
  ["GERENCIA DEL PALACIO DE BELLAS ARTES","SERVICIO SOCIAL EN EL ARTE Y CULTURA DEL PALACIO DE BELLAS ARTES 2012"],
  ["COORDINACION NACIONAL DE LITERATURA","CONTROL PRESUPUESTAL DE LA COORDINACION NACIONAL DE LITERATURA"],
  ["COORDINACION NACIONAL DE LITERATURA","REPARACIÓN, MANTENIMIENTO Y SERVICIOS DE COMPUTADORES"],
  ["PROYECTO DE EXTENCION CULTURAL","GESTIÓN Y APOYO EN PROGRAMAS MULTIDISCIPLINARIOS DEL INBA"],
  ["SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS","APOYO ADMINISTRATIVO EN LA SGEIA"],
  ["SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS","APOYO AL DESARROLLO ACADEMICO DE LAS ESCUELAS DEL INBAL"],
  ["SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS","MEJORAMIENTO DE RECURSOS INFORMATICOS"],
  ["SUBDIRECCION GENERAL DE EDUCACION E INVESTIGACION ARTISTICAS","PROGRAMA DE APOYO AL DESARROLLO ACADÉMICO DE LAS ESCUELAS DEL INBAL"],
  ["MUSEO ESTUDIO DIEGO RIVERA","ACTIVIDADES EDUCATIVAS Y EXPOSICIONES"],
  ["MUSEO CASA ESTUDIO DIEGO RIVERA Y FRIDA KAHLO","ACTIVIDADES EDUCATIVAS Y EXPOSICIONES"],
  ["MUSEO NACIONAL DE SAN CARLOS","EL ARTE EN SAN CARLOS A TU SERVICIO 2"],
  ["ESCUELA NACIONAL DE DANZA NELLIE Y GLORIA CAMPOBELLO","APOYO EN EL SERVICIO ACADÉMICO Y ADMINISTRATIVO QUE BRINDA LA ENDNGC"],
  ["SUBDIRECCIÓN DE ASUNTOS LABORALES Y MOVIMIENTOS DE PERSONAL","CULTURA, ESPARCIMIENTO Y DEPORTE"],
  ["SUBDIRECCIÓN DE SERVICIOS Y HONORARIOS","ADMINISTRACION DE RECURSOS"],
  ["UNIDAD DEPARTAMENTAL DE CAPACITACION Y DESARROLLO DE PERSONAL","CULTURA Y RECREACION"],
  ["ORGANO POLITICO ADMINISTRATIVO DEL GOBIERNO DEL DISTRITO FEDERAL EN MIGUEL HIDALGO","APOYO Y FORTALECIMIENTO A LA EDUCACIÓN"],
  ["ORGANO POLITICO ADMINISTRATIVO DEL GOBIERNO DEL DISTRITO FEDERAL EN MIGUEL HIDALGO","FOMENTO CULTURAL Y RECREACIÓN"],
  ["ORGANO POLITICO ADMINISTRATIVO DEL GOBIERNO DEL DISTRITO FEDERAL EN MIGUEL HIDALGO","ADOPTA UN AMIGO, SERVICIO SOCIAL TUTORIAL"],
  ["COMISION NACIONAL DE LOS DERECHOS HUMANOS","INTERDISCIPLINARIO PARA EL ANALISIS DE LOS DERECHOS HUMANOS"],
  ["SECRETARIA DE ADMINISTRACION, RESIDENCIA PARA INVESTIGADORES VISITANTES DEL IPN","ATENCION Y SERVICIO DE LA RIV-IPN"],
  ["H. AYUNTAMIENTO CONSTITUCIONAL DE HUIXQUILUCAN","LIQUIDEZ DE INSTITUCIONES DE CREDITO Y ADMINISTRACION DE PROGRAMAS ESPECIALES"],
  ["MUSEO INTERACTIVO DE ECONOMÍA","CONTENIDOS"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","APOYO TECNICO A LA BIBLIOTECA DE CIENCIA Y TECNOLOGIA"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","USO DEL SISTEMA DE CATALOGACIÓN Y CLASIFICACIÓN LC (LIBRARY OF CONGRESS) EN LAS BIBLIOTECAS BNCT Y BIBLIOTECA CENTRAL"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","CONSULTA A BASE DE DATOS DE TEXTO COMPLETO"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","DEPARTAMENTO ADMINISTRATIVO"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","PROGRAMA DE VISITAS GUIADAS"],
  ["DIRECTORA DE BIBLIOTECAS INSTITUTO POLITECNICO NACIONAL","INTEGRACION Y OPERACION DE ARCHIVO VERTICAL"],
  ["DIRECCION DE DIFUSION Y FOMENTO A LA CULTURA","INTEGRAL DEL SERVICIO SOCIAL EN APOYO A LA DIFUSIÓN CULTURAL"],
  ["DIRECCIÓN DE CAPITAL HUMANO","PROGRAMA MULTIFUNCIONAL DE CAPITAL HUMANO"],
  ["DIRECTOR","SERVICIO SOCIAL PARA EL CENTRO DE EDUCACION CONTINUA ING. EUGENIO MÉNDEZ DOCURRO"],
  ["DEPARTAMENTO DE SERVICIO SOCIAL Y SEGUIMIENTO DE EGRESADOS","APOYO A LAS ACTIVIDADES SUSTANTIVAS Y PROYECTOS DE INVESTIGACIÓN INSTITUCIONALES"],
  ["MUSEO ANTIGUO COLEGIO DE SAN ILDEFONSO","UN ACERCAMIENTO AL ARTE"],
  ["IMPRESORA Y ENCUADERNADORA PROGRESO, S.A. DE C.V.","IEPSA-IE2010"],
  ["DEPARTAMENTO DE SERVICIOS ADMINISTRATIVOS","ACTUALIZACIÓN Y CONTROL INTERNO DE ACTIVO FIJO"],
  ["UNIDAD DE INFORMATICA","ACTUALIZACION DE SISTEMAS INFORMATICOS"],
  ["DEPARTAMENTO DE SERVICIOS ADMINISTRATIVOS","DEPARTAMENTO DE LENGUAS INDOEUROPEAS"],
  ["SEP. DIRECCION GENERAL DE RECURSOS MATERIALES Y SERVICIOS","APOYO A LA DIRECCION GENERAL DE RECURSOS MATERIALES Y SERVICIOS"],
  ["DIRECCION DE EDUCACION DEL H. AYUNTAMIENTO DE ECATEPEC DE MORELOS","DESARROLLO SUSTENTABLE,SEGURIDAD PUBLICA Y COMBATE A LA MARGINACION"],
  ["AREA 2 DE NORTE DE OPERACION Y GESTION DE ESCUELAS SECUNDARIAS TECNICAS","APOYO AL PROCESO ENSEÑANZA APREDIZAJE 2"],
  ["MARÍA DE LA LUZ AGUILAR TAPIA","PROMOTORES DEPORTIVOS VOLUNTARIOS"],
  ["UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO","PROGRAMA ADOPTE UN TALENTO"],
  ["SERVICIOS ACADEMICOS","PROSSNA CECYT10"],
  ["DIRECCIÓN GENERAL DE TELEVISIÓN EDUCATIVA","APOYO A LA EDUCACIÓN"],
  ["INSTITUTO DE ALFABETIZACIÓN Y EDUCACIÓN BÁSICA PARA ADULTOS","POR UN MEXICO SIN REZAGO"],
  ["DIRECCION DE ADMINISTRACION ESCOLAR","REGISTRO Y CONTROL INTERNO DE INGRESOS PROPIOS"],
  ["INSTITUTO DE ESTUDIOS SUPERIORES EN ADMINISTRACIÓN PÚBLICA","INVESTIGADOR DE PROGRAMAS DE ESTUDIOS"],
  
]

var prestatarioAleatorio = elementos[Math.floor(Math.random()*elementos.length)];

T.post('statuses/update', { status: 'Realiza tu servicio social en: ' + '"' +
prestatarioAleatorio[0] + '"' + " en el programa: " +  '"' + prestatarioAleatorio[1] + '"'}
, function(err, data, response) { console.log(data)
})
