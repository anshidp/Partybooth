import os
import re

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # CSS Variables and Colors
    content = content.replace('var(--gold)', 'var(--primary)')
    content = content.replace('var(--gold-light)', 'var(--primary-light)')
    content = content.replace('var(--gold-dark)', 'var(--primary-dark)')
    content = content.replace('var(--gradient-gold)', 'var(--gradient-primary)')
    content = content.replace('gold-text', 'primary-text')
    
    # Backgrounds
    content = content.replace('var(--dark)', 'var(--bg)')
    content = content.replace('var(--dark-2)', 'var(--bg-2)')
    content = content.replace('var(--dark-3)', 'var(--bg-3)')
    
    # Text colors
    content = content.replace('color: white', 'color: var(--text)')
    content = content.replace('color: var(--white)', 'color: var(--text)')
    content = re.sub(r'color:\s*rgba\(255,\s*255,\s*255,\s*0\.[789]\)', 'color: var(--text-muted)', content)
    content = content.replace('color: rgba(255,255,255,0.8)', 'color: var(--text-muted)')
    content = content.replace('color: rgba(255,255,255,0.7)', 'color: var(--text-muted)')
    
    # Borders and Subtle Backgrounds
    content = content.replace('rgba(255,255,255,0.0', 'rgba(1,158,146,0.0')
    content = content.replace('rgba(255,255,255,0.1', 'rgba(1,158,146,0.1')
    content = content.replace('rgba(255,255,255,0.2', 'rgba(1,158,146,0.2')
    content = content.replace('background: rgba(255,255,255,0.03)', 'background: var(--bg)')
    content = content.replace('background: rgba(36,36,36,0.9)', 'background: var(--bg)')
    content = content.replace('background: rgba(255,255,255,0.02)', 'background: var(--bg)')
    
    # Replace GOLD RGB 
    content = content.replace('rgba(201,168,76,', 'rgba(1,158,146,')
    content = content.replace('rgba(201, 168, 76,', 'rgba(1, 158, 146,')
    
    # Light theme specific tweaks
    if 'Navbar.css' in filepath:
        content = content.replace('background: rgba(10, 10, 10, 0.95)', 'background: rgba(255, 255, 255, 0.95)')
        content = content.replace('background: rgba(10,10,10,0.98)', 'background: rgba(255, 255, 255, 0.98)')
        content = content.replace('background: white', 'background: var(--text)') # for hamburger
        
    if 'Gallery.css' in filepath:
        content = content.replace('background: rgba(0,0,0,0.92)', 'background: rgba(255,255,255,0.92)')
        content = content.replace('background: rgba(0,0,0,0.6)', 'background: rgba(255,255,255,0.9)')
        
    with open(filepath, 'w') as f:
        f.write(content)

for root, _, files in os.walk('/Users/muhammedanshid/Desktop/Party booth/src'):
    for file in files:
        if file.endswith('.css') or file.endswith('.jsx'):
            process_file(os.path.join(root, file))
