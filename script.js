const companyData = {
    'Apple': {
        founder: 'Steve Jobs, Steve Wozniak, Ronald Wayne',
        about: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, and accessories.',
        environment: 'Innovative, fast-paced, design-driven.',
        revenue: [90, 85, 88, 95],
        reviews: 4.8,
        technologies: ['iOS', 'macOS', 'Swift', 'ARKit']
    },
    'Google': {
        founder: 'Larry Page, Sergey Brin',
        about: 'Google specializes in Internet-related services and products, including search, cloud computing, and AI.',
        environment: 'Open, collaborative, data-driven.',
        revenue: [80, 82, 79, 91],
        reviews: 4.7,
        technologies: ['Android', 'TensorFlow', 'Cloud AI', 'Flutter']
    },
    'Amazon': {
        founder: 'Jeff Bezos',
        about: 'Amazon focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
        environment: 'Customer-centric, fast-paced, data-driven.',
        revenue: [100, 105, 98, 110],
        reviews: 4.6,
        technologies: ['AWS', 'Alexa', 'DynamoDB', 'Lambda']
    },
    'Microsoft': {
        founder: 'Bill Gates, Paul Allen',
        about: 'Microsoft develops, licenses, and supports software, services, devices, and solutions worldwide.',
        environment: 'Inclusive, innovative, and enterprise-focused.',
        revenue: [95, 97, 99, 102],
        reviews: 4.7,
        technologies: ['Windows', 'Azure', 'C#', 'Power BI']
    },
    'Netflix': {
        founder: 'Reed Hastings, Marc Randolph',
        about: 'Netflix, Inc. is an American subscription streaming service and production company.',
        environment: 'Creative, data-driven, user-focused.',
        revenue: [70, 75, 72, 78],
        reviews: 4.5,
        technologies: ['React', 'Python', 'AWS', 'Kafka']
    },
    'Tesla': {
        founder: 'Elon Musk, JB Straubel, Martin Eberhard, Marc Tarpenning, Ian Wright',
        about: 'Tesla, Inc. is an American electric vehicle and clean energy company.',
        environment: 'Innovative, fast-paced, sustainability-driven.',
        revenue: [85, 90, 88, 93],
        reviews: 4.6,
        technologies: ['Autopilot', 'AI', 'SolarTech', 'Python']
    }
};

document.getElementById('companyList').addEventListener('click', (e) => {
    if (e.target && e.target.matches('button[data-company]')) {
        const company = e.target.getAttribute('data-company');
        loadCompany(company);
    }
});

function loadCompany(company) {
    const data = companyData[company];

    document.getElementById('companyDetails').innerHTML = `
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">${company}</h2>
                <h5>Founder: ${data.founder}</h5>
                <p>${data.about}</p>
                <p><strong>Work Environment:</strong> ${data.environment}</p>
                <p><strong>Technologies Used:</strong> ${data.technologies.join(', ')}</p>
                <p><strong>Reviews:</strong> <span class="rating-stars">${'★'.repeat(Math.round(data.reviews))}${'☆'.repeat(5 - Math.round(data.reviews))}</span> (${data.reviews}/5)</p>
                <canvas id="revenueChart"></canvas>
            </div>
        </div>
    `;

    const ctx = document.getElementById('revenueChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Revenue (in billions)',
                data: data.revenue,
                backgroundColor: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'],
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeInOutQuart'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
