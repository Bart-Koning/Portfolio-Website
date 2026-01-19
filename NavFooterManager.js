class SpecialHeader extends HTMLElement {
    connectedCallback() {
        const inProjectsFolder = location.pathname.includes('/Projects/');

        const base = inProjectsFolder ? '..' : '.';

        this.innerHTML = `
        <nav>
            <ul>
                <li><a href="${base}/index.html">Homepage</a></li>
                <li><a href="${base}/Projects.html">Projects</a></li>
                <li><a href="${base}/About me.html">About me</a></li>
                <li><a href="${base}/contact.html">Contact</a></li>
            </ul>
        </nav>
        `;
    }
}


class SpecialFooter extends HTMLElement {
    connectedCallback() {
        const now = new Date();
        const date = now.toLocaleDateString();

        const devStart = new Date("2025-12-10T00:00:00");
        const devDate = devStart.toLocaleDateString();

        this.innerHTML = `
            <footer>
                <p>
                    made on: 
                    <span class="devDate">${devDate}</span> 
                    to 
                    <span class="currentDate">${date}</span>
                </p>
            </footer>
        `;
    }
}


customElements.define('nav-js', SpecialHeader);
customElements.define('footer-js', SpecialFooter);
