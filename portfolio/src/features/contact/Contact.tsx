import styles from './Contact.module.scss';

export function Contact() {
  return (
    <section id="contact" className={`container ${styles.contact}`}>
      <h2>Contact</h2>
      <p>
        {/* Placeholder — texto real cuando definamos el copy */}
        Breve mensaje invitando a contactarte.
      </p>

      {/*
        Estructura del form nada más. La lógica de envío (submit handler,
        validación, a dónde va el mensaje sin backend) queda pendiente
        como decisión aparte — no la resolvemos en este paso.
      */}
      <form className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows={5} required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}