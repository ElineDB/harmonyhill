
import styles from "./BookingPolicy.module.css";

export default function BookingPolicy() {
    return (
        <div className={styles.policyContent}>

            <h3 className={styles.policyHeader}>
                Booking & Payment Terms
            </h3>

            <div className={styles.policyBody}>
                • <strong>Deposit</strong>: A <strong>50% deposit</strong> is required to secure your reservation. <br />
                • <strong>Confirmation:</strong> Once we receive your request, we will send payment instructions via email
                or WhatsApp.
                Please complete the transfer within <strong>48 hours</strong> to confirm your stay.<br />
                • <strong>Final Balance:</strong> The remaining 50% is due <strong>30 days prior to arrival</strong>. Please
                note that reservations may be
                cancelled if the final payment is not received by this deadline.<br />
                • <strong>Last-Minute Bookings:</strong> For reservations made within 30 days of check-in, <strong>full
                    payment</strong> is required within 24
                hours to confirm the booking.<br />
            </div>

            <br />

            <h3 className={styles.policyHeader}>
                Cancellation Policy
            </h3>
            <div className={styles.policyBody}>
                • Deposits are refundable up to 30 days before your check-in date, minus a <strong>10% administrative
                    fee</strong> and any applicable bank charges.
                • No refunds will be issued for reasons related to wild life or power outages.
            </div>

            <br />

            <h3 className={styles.policyHeader}>
                Good to know
            </h3>
            <div className={styles.policyBody}>
                • <strong>Location:</strong> We are about <strong>30 minutes north of Ubud</strong> in a traditional village.<br />
                • <strong>AC:</strong> As we are at a higher elevation, <strong>we do not need air conditioning</strong> and instead rely on
                natural ventilation and fans.<br />
                • <strong>Meals:</strong> We are <strong>100% vegan</strong> and all our dishes are plant-based.<br />
                • <strong>Local wildlife:</strong> We are <strong>sometimes visited by cicadas</strong>. They're about the size of your thumb but they
                screech at impressively high volume. Guests should be prepared to hear them a few hours per day.
            </div>

            <br /> <br />
            <br /> <br />
        </div>
    );
}