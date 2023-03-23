import './bestdoctor.css'
class Node {
    data: string;
    next: Node | null;

    constructor(data: string) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(data: string): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const namesList = new LinkedList();
namesList.append("Alice");
namesList.append("Bob");
namesList.append("Charlie");
namesList.append("David");
console.log(namesList.display());

function BestDoctor() {
    return (
        <section className='pt-11'>
            <div className="container-fluid custom-banner-padding">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-8">
                        <h2 className="primary-brand-color banner-text-size mb-8">3500+ doctors <br /> and everyone's <span className="letter-cta">the best.</span></h2>
                        <p className="mb-4 nunito-Sans">iCliniq upholds the highest standards when approving doctors to practice online. <br />That means every doctor you see on the platform is highly qualified to provide the best care possible.</p>
                        <a className="btn cta-banner-icliniq  mr-2.5" href="https://www.icliniq.com/search/online-doctors-directory">Choose a doctor</a>
                    </div>
                    <div className="col-span-4">
                        <img width="424" height="400" className="choose-doctor-img-bg ls-is-cached lazyloaded" alt="Choose a Doctor" src="https://assets.icliniq.com/v2/assets/images/hompage-image/stethoscope-bg.jpg"/>
                        <div className="relative">
                            <div className="doctor-panel-card-flex-left">
                                <div className="doctor-panel-card">
                                    <div className="mask"></div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img alt="Lohit Chauhan" title="Lohit Chauhan" className="img-container img-doctor-thumb" width="140" height="140" src="https://img.icliniq.com/doc_photo/dr-dr-lohit-chauhan-450760-5bdc97044cab1-sm.jpg" /> 
                                        </div>
                                        <div className="flex-grow-1 ml-6">
                                            <h3 className="h6 font-bold mt-0">Lohit Chauhan</h3>
                                            <p className="mb-0">General Medicine</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="doctor-panel-card-flex-right">
                                <div className="doctor-panel-card">
                                    <div className="mask"></div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img alt="Alan Ho" title="Alan Ho" className="img-container img-doctor-thumb" width="140" height="140" src="https://assets.icliniq.com/v2/assets/images/iCliniq-logo/iCliniq_q.svg"/>
                                        </div>
                                        <div className="flex-grow-1 ml-6">
                                            <h3 className="h6 font-bold mt-0">Alan Ho</h3>
                                            <p className="mb-0">Medical oncology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="doctor-panel-card-flex-left">
                                <div className="doctor-panel-card">
                                    <div className="mask"></div>
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <img alt="Vijay Venkatraman" title="Vijay Venkatraman" className="img-container img-doctor-thumb" width="140" height="140" src="https://img.icliniq.com/doc_photo/dr-vijay-venkatraman-janarthanan-58605-60e384ab5eabe-sm.jpg" /> 
                                        </div>
                                        <div className="flex-grow-1 ml-6">
                                            <h3 className="h6 font-bold mt-0">Vijay Venkatraman</h3>
                                            <p className="mb-0">Diabetology</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default BestDoctor