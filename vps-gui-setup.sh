#!/bin/bash
# VPS GUI Setup Script
# This will install XFCE desktop environment and VNC server

echo "=========================================="
echo "VPS GUI Setup - XFCE + VNC"
echo "=========================================="
echo ""

# Update system
echo "[1/5] Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install XFCE desktop environment
echo "[2/5] Installing XFCE desktop environment..."
sudo apt install -y xfce4 xfce4-goodies

# Install VNC server
echo "[3/5] Installing TightVNC server..."
sudo apt install -y tightvncserver

# Install additional tools
echo "[4/5] Installing additional tools..."
sudo apt install -y dbus-x11

# Setup VNC server
echo "[5/5] Setting up VNC server..."
echo ""
echo "You will now be asked to set a VNC password (6-8 characters)"
echo "This is the password you'll use to connect to the GUI"
echo ""

vncserver

# Kill the initial VNC server to configure it
vncserver -kill :1

# Backup existing xstartup if it exists
if [ -f ~/.vnc/xstartup ]; then
    mv ~/.vnc/xstartup ~/.vnc/xstartup.bak
fi

# Create new xstartup configuration
cat > ~/.vnc/xstartup << 'EOF'
#!/bin/bash
xrdb $HOME/.Xresources
startxfce4 &
EOF

# Make it executable
chmod +x ~/.vnc/xstartup

# Start VNC server
vncserver -geometry 1920x1080 -depth 24

echo ""
echo "=========================================="
echo "Setup Complete!"
echo "=========================================="
echo ""
echo "VNC server is running on display :1"
echo "To connect from your Ubuntu machine:"
echo "  1. Install VNC viewer: sudo apt install -y tigervnc-viewer"
echo "  2. Create SSH tunnel: ssh -i USkey.pem -L 5901:localhost:5901 ubuntu@54.196.214.0"
echo "  3. Open VNC viewer and connect to: localhost:5901"
echo ""
echo "Useful commands:"
echo "  - Stop VNC: vncserver -kill :1"
echo "  - Start VNC: vncserver -geometry 1920x1080 -depth 24"
echo "  - List running VNC sessions: vncserver -list"
echo ""
