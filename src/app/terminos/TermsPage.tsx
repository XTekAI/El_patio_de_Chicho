'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './terms.module.css';

const CONTENT = {
  en: {
    backHome: '← Back to Home',
    badge: 'Legal',
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: April 2026',
    intro: 'By making a reservation at El Patio de Chicho you agree to the following terms and conditions. Please read them carefully before submitting your booking request.',
    sections: [
      {
        num: '01',
        title: 'Scope of Service',
        body: 'El Patio de Chicho provides event space rental only. No food, non-alcoholic beverages, or alcoholic beverages are sold on the premises. The rental fee covers exclusive use of the outdoor space, tables, chairs, and — when selected — the sound equipment.',
      },
      {
        num: '02',
        title: 'Reservations & Availability',
        body: 'All reservations are subject to availability. A booking request does not guarantee a reservation. Your date is only secured once full payment and the security deposit have been received and a confirmation has been issued by El Patio de Chicho.',
      },
      {
        num: '03',
        title: 'Payment Policy',
        body: '100% of the total rental cost must be paid in advance before the event date. No event will be held without prior payment in full. We reserve the right to release the date to other clients if payment is not received within the agreed timeframe.',
      },
      {
        num: '04',
        title: 'Security Deposit',
        body: 'A refundable security deposit of $200.00 USD is required at the time of booking. This deposit will be fully refunded within 5–7 business days after the event, provided the venue is returned in the same condition it was received with no damages. If damages are found, the cost of repairs will be deducted from the deposit. If repair costs exceed $200, the client will be responsible for the difference.',
      },
      {
        num: '05',
        title: 'Food & Beverages',
        body: 'Clients and their guests are responsible for providing their own food and beverages. Outside catering services are welcome. Alcoholic beverages may be brought to the venue by the client and guests in accordance with all applicable local, state, and federal laws. El Patio de Chicho does not sell, serve, or supply any food or beverages of any kind.',
      },
      {
        num: '06',
        title: 'Operating Hours',
        body: 'El Patio de Chicho is available for rental Monday through Sunday, from 10:00 AM to 8:00 PM. All events must begin and conclude within these hours. Events that run past 8:00 PM will be subject to an additional fee or early termination at the discretion of management.',
      },
      {
        num: '07',
        title: 'Rental Duration',
        body: 'The minimum rental period is 3 (three) hours. There is no set maximum — you may rent the space for as many hours as needed within the operating hours of 10:00 AM to 8:00 PM.',
      },
      {
        num: '08',
        title: 'DJ, Host & Entertainment',
        body: 'DJ, host, and animator services are not included in the base rental price. These services are available upon request and are quoted separately based on the type of event, duration, and availability. Contact us at +1 (609) 310-8842 for a personalized quote.',
      },
      {
        num: '09',
        title: 'Cancellation Policy',
        body: 'Cancellations made 7 or more days before the event date will receive a full refund of the rental payment. The security deposit is always refunded provided no damages have occurred. Cancellations made less than 7 days before the event will forfeit the rental payment. No-shows forfeit both the rental payment and the security deposit.',
      },
      {
        num: '10',
        title: 'Damage & Liability',
        body: 'The client who makes the reservation assumes full responsibility for any damage caused to the venue, furniture, equipment, or property during the event. El Patio de Chicho is not responsible for lost, stolen, or damaged personal belongings of guests. The client agrees to indemnify and hold El Patio de Chicho harmless from any claims, losses, or damages arising from the event.',
      },
      {
        num: '11',
        title: 'Conduct & Compliance',
        body: 'All clients and guests must conduct themselves in a lawful, respectful, and orderly manner at all times. Management reserves the right to terminate any event immediately and without refund if guests engage in illegal activity, cause disturbances, or violate these terms. Compliance with all local noise ordinances and regulations is required.',
      },
      {
        num: '12',
        title: 'Modifications to Terms',
        body: 'El Patio de Chicho reserves the right to update or modify these terms and conditions at any time. Changes will take effect upon posting. Clients are encouraged to review these terms before each booking.',
      },
    ],
    contact: 'Questions about these terms?',
    contactBtn: 'Call Us: +1 (609) 310-8842',
  },
  es: {
    backHome: '← Volver al Inicio',
    badge: 'Legal',
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización: Abril 2026',
    intro: 'Al realizar una reserva en El Patio de Chicho, aceptas los siguientes términos y condiciones. Por favor léelos detenidamente antes de enviar tu solicitud de reserva.',
    sections: [
      {
        num: '01',
        title: 'Alcance del Servicio',
        body: 'El Patio de Chicho ofrece únicamente renta de espacio para eventos. No se venden alimentos, bebidas no alcohólicas ni bebidas alcohólicas dentro de las instalaciones. El costo de la renta cubre el uso exclusivo del espacio al aire libre, mesas, sillas y — cuando se seleccione — el equipo de sonido.',
      },
      {
        num: '02',
        title: 'Reservas y Disponibilidad',
        body: 'Todas las reservas están sujetas a disponibilidad. Una solicitud de reserva no garantiza la fecha. Tu fecha queda asegurada únicamente una vez que se haya recibido el pago total y el depósito de seguridad, y se haya emitido una confirmación por parte de El Patio de Chicho.',
      },
      {
        num: '03',
        title: 'Política de Pago',
        body: 'El 100% del costo total de la renta debe pagarse por adelantado antes de la fecha del evento. No se realizará ningún evento sin el pago previo en su totalidad. Nos reservamos el derecho de liberar la fecha a otros clientes si el pago no se recibe dentro del tiempo acordado.',
      },
      {
        num: '04',
        title: 'Depósito de Seguridad',
        body: 'Se requiere un depósito de seguridad reembolsable de $200.00 USD al momento de reservar. Este depósito se reembolsará en su totalidad dentro de 5 a 7 días hábiles después del evento, siempre que el local sea devuelto en las mismas condiciones en que se recibió, sin daños. Si se encuentran daños, el costo de las reparaciones se deducirá del depósito. Si los costos de reparación superan los $200, el cliente será responsable de la diferencia.',
      },
      {
        num: '05',
        title: 'Comida y Bebidas',
        body: 'Los clientes y sus invitados son responsables de traer su propia comida y bebidas. Se permite el servicio de catering externo. Las bebidas alcohólicas pueden ser traídas al local por el cliente y los invitados de conformidad con todas las leyes locales, estatales y federales aplicables. El Patio de Chicho no vende, sirve ni suministra ningún tipo de alimentos o bebidas.',
      },
      {
        num: '06',
        title: 'Horario de Operación',
        body: 'El Patio de Chicho está disponible para renta de lunes a domingo, de 10:00 AM a 8:00 PM. Todos los eventos deben comenzar y concluir dentro de este horario. Los eventos que se extiendan más allá de las 8:00 PM estarán sujetos a un cargo adicional o a la terminación anticipada a discreción de la administración.',
      },
      {
        num: '07',
        title: 'Duración de la Renta',
        body: 'El período mínimo de renta es de 3 (tres) horas. No hay un máximo establecido — puedes rentar el espacio por todas las horas que necesites dentro del horario de operación de 10:00 AM a 8:00 PM.',
      },
      {
        num: '08',
        title: 'DJ, Animador y Entretenimiento',
        body: 'Los servicios de DJ, animador y presentador no están incluidos en el precio base de la renta. Estos servicios están disponibles bajo solicitud y se cotizan por separado según el tipo de evento, la duración y la disponibilidad. Contáctanos al +1 (609) 310-8842 para una cotización personalizada.',
      },
      {
        num: '09',
        title: 'Política de Cancelación',
        body: 'Las cancelaciones realizadas con 7 o más días de anticipación a la fecha del evento recibirán un reembolso completo del pago de la renta. El depósito de seguridad siempre se reembolsa siempre que no haya daños. Las cancelaciones realizadas con menos de 7 días de anticipación perderán el pago de la renta. Los clientes que no se presenten perderán tanto el pago de la renta como el depósito de seguridad.',
      },
      {
        num: '10',
        title: 'Daños y Responsabilidad',
        body: 'El cliente que realiza la reserva asume total responsabilidad por cualquier daño causado al local, muebles, equipo o propiedad durante el evento. El Patio de Chicho no se responsabiliza por pertenencias personales de los invitados que sean perdidas, robadas o dañadas. El cliente acepta indemnizar y eximir de responsabilidad a El Patio de Chicho de cualquier reclamación, pérdida o daño derivado del evento.',
      },
      {
        num: '11',
        title: 'Conducta y Cumplimiento',
        body: 'Todos los clientes e invitados deben comportarse de manera legal, respetuosa y ordenada en todo momento. La administración se reserva el derecho de terminar cualquier evento de inmediato y sin reembolso si los invitados participan en actividades ilegales, causan disturbios o violan estos términos. Se requiere el cumplimiento de todas las ordenanzas locales de ruido y regulaciones aplicables.',
      },
      {
        num: '12',
        title: 'Modificaciones a los Términos',
        body: 'El Patio de Chicho se reserva el derecho de actualizar o modificar estos términos y condiciones en cualquier momento. Los cambios entrarán en vigor al momento de publicarse. Se recomienda a los clientes revisar estos términos antes de cada reserva.',
      },
    ],
    contact: '¿Tienes preguntas sobre estos términos?',
    contactBtn: 'Llámanos: +1 (609) 310-8842',
  },
};

export default function TermsPage() {
  const { language, setLanguage } = useLanguage();
  const c = CONTENT[language];

  return (
    <div className={styles.page}>

      {/* Top bar */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.backLink}>{c.backHome}</Link>
        <button
          className={styles.langBtn}
          onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        >
          {language === 'en' ? 'Español' : 'English'}
        </button>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>{c.badge}</span>
        <h1 className={styles.title}>
          {c.title.split('&').map((part, i) =>
            i === 0
              ? <span key={i}>{part}<span className="text-neon">&</span></span>
              : <span key={i}>{part}</span>
          )}
        </h1>
        <p className={styles.lastUpdated}>{c.lastUpdated}</p>
        <p className={styles.intro}>{c.intro}</p>
      </header>

      {/* Sections */}
      <main className={styles.main}>
        <div className={styles.sections}>
          {c.sections.map((section) => (
            <div key={section.num} className={styles.section}>
              <div className={styles.sectionNum}>{section.num}</div>
              <div className={styles.sectionBody}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionText}>{section.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className={styles.contactBox}>
          <p className={styles.contactLabel}>{c.contact}</p>
          <a href="tel:+16093108842" className={styles.contactBtn}>{c.contactBtn}</a>
        </div>

        {/* Back link */}
        <div className={styles.footer}>
          <Link href="/" className={styles.footerBack}>{c.backHome}</Link>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} El Patio de Chicho</p>
        </div>
      </main>

    </div>
  );
}
