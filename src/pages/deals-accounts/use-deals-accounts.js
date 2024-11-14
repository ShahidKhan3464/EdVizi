import { useState } from 'react';

const initialCards = [
  {
    id: 1,
    title: 'LA Unified School District',
    amount: '$300',
    dueDate: '04/13/2020',
    status: 'pending'
  },
  {
    id: 2,
    title: 'Davidson County (Metro)',
    amount: '$300',
    dueDate: '04/13/2020',
    status: 'pending'
  },
  {
    id: 3,
    title: 'Davidson County (Metro)',
    amount: '$300',
    dueDate: '04/13/2020',
    status: 'in-progress'
  },
  {
    id: 4,
    title: 'Davidson County (Metro)',
    amount: '$300',
    dueDate: '04/13/2020',
    status: 'at-risk'
  }
];

function useDealsAccounts() {
  const [cards, setCards] = useState(initialCards);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalToggle, setModalToggle] = useState('');
  const [draggedCard, setDraggedCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    lead_source: '',
    company_name: ''
  });

  const data = [
    {
      name: 'John Doe',
      city: 'Student',
      state: 'Acme.Inc',
      address: '3605 Parker Rd.',
      schools: 2222,
      students: 2333,
      type: 'Public'
    },
    {
      name: 'John Doe',
      city: 'Student',
      state: 'Acme.Inc',
      address: '775 Rolling Green Rd.',
      schools: 21212,
      students: 2312,
      type: 'Charter'
    },
    {
      name: 'John Doe',
      city: 'Student',
      state: 'Acme.Inc',
      address: '8558 Green Rd.',
      schools: 12122,
      students: 12122,
      type: 'Private'
    }
  ];

  const columns = [
    {
      label: 'District Name',
      accessor: 'name'
    },
    { label: 'City', accessor: 'city' },
    {
      label: 'State',
      accessor: 'state'
    },
    {
      label: 'Address',
      accessor: 'address'
    },
    {
      label: 'No of Schools',
      accessor: 'schools'
    },
    {
      label: 'No of Students',
      accessor: 'students'
    },
    {
      label: 'District Type',
      accessor: 'type'
    }
  ];

  const renderCellContent = (item, column) => {
    const value = item[column.accessor];
    return column.render ? column.render(item) : value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDragStart = (e, index) => {
    console.log(e.dataTransfer);
    setDraggedCard(cards[index]);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (index) => {
    console.log(index);
    const draggedOverCard = cards[index];

    // Skip if the dragged item is hovered over itself
    if (draggedCard === draggedOverCard) return;

    // Reorder the cards array
    const newCards = cards.filter((card) => card !== draggedCard);
    newCards.splice(index, 0, draggedCard);
    setCards(newCards);
  };

  const handleDragEnd = () => {
    setDraggedCard(null);
  };

  return {
    data,
    cards,
    columns,
    formData,
    modalToggle,
    handleChange,
    handleDragEnd,
    handleDragOver,
    setModalToggle,
    setSearchQuery,
    handleDragStart,
    renderCellContent,
    totalPages: data.length
  };
}

export default useDealsAccounts;
