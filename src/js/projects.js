function projectCard(projectTitle, projectDescription, projectTopics, projectLanguage, projectURL){
    const cardParent = document.createElement('div');
    cardParent.className = 'col-12 my-2';

    const card = document.createElement('div');
    card.className = 'card project-card';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const anchorLink = document.createElement('a');
    anchorLink.href = projectURL;
    anchorLink.className = 'stretched-link text-decoration-none';
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title text-primary';
    var span = document.createElement('span');
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-book-bookmark me-2';
    span.appendChild(icon);
    cardTitle.appendChild(span);
    span = document.createElement('span');
    span.className = 'fw-semibold';
    span.appendChild(document.createTextNode(projectTitle));
    cardTitle.appendChild(span);
    anchorLink.appendChild(cardTitle);
    cardBody.appendChild(anchorLink);

    const cardDescription = document.createElement('p');
    cardDescription.className = 'card-text';
    cardDescription.appendChild(document.createTextNode(projectDescription));
    cardBody.appendChild(cardDescription);

    const cardBadges = document.createElement('div');
    projectTopics.forEach(element => {
        
        if(element == 'live'){return;}
        var spanBadge = document.createElement('span');
        spanBadge.className = 'badge rounded-pill text-bg-success opacity-75 me-1';
        spanBadge.appendChild(document.createTextNode(element));
        cardBadges.appendChild(spanBadge);
    });
    cardBody.appendChild(cardBadges);

    const cardLanguage = document.createElement('div');
    cardLanguage.className = 'my-1';
    span = document.createElement('span');
    span.className = 'badge rounded-pill text-bg-primary opacity-75';
    span.appendChild(document.createTextNode(projectLanguage));
    cardLanguage.appendChild(span);
    cardBody.appendChild(cardLanguage);

    card.appendChild(cardBody);
    cardParent.appendChild(card);
    return cardParent;
}
