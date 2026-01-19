window.addEventListener("load", () => {
				const cards = document.querySelectorAll(".project");

				cards.forEach((card, index) => {
					setTimeout(() => {
						card.classList.add("show");

						/* after fade-in finishes, enable fast hover */
						setTimeout(() => {
							card.classList.add("interactive");
						}, 600); // must match CSS fade duration
						
					}, index * 120);
				});
			});