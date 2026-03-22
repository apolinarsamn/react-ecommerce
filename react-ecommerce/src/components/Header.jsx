const Header = () => {
    return (
        <header className="py-2 text-center" style={{ 
            backgroundColor: '#000', // Solid black for high contrast
            color: '#fff',
            fontSize: '0.65rem', // Slightly smaller for that delicate lux look
            letterSpacing: '3px', // Increased spacing for editorial feel
            textTransform: 'uppercase',
            fontWeight: '500',
            borderBottom: '1px solid rgba(255,255,255,0.1)' 
        }}>
            <div className="container fade-in">
                Receive 10% OFF your first editorial selection — 
                <span className="ms-2" style={{ 
                    textDecoration: 'underline', 
                    textUnderlineOffset: '3px',
                    cursor: 'pointer',
                    fontWeight: '700' 
                }}>
                    Explore
                </span>
            </div>
        </header>
    );
};

export default Header;